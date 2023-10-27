import { MongoClient, ServerApiVersion } from 'mongodb'
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_CONNECTION_LINK, {
	serverApi: {
	  version: ServerApiVersion.v1,
	  strict: false,
	  deprecationErrors: true
	}
})

export async function mongoConnect() {
	try {
	  await client.connect()
	  const database = client.db('rubduck-layers')
	  return database.collection('courses')
	} catch (error) {
	  console.error('Error al conectar a la base de datos')
	  console.error(error)
	  await client.close()
	}
}
