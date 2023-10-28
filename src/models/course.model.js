import { ObjectId } from 'mongodb'
import { mongoConnect } from '../db/connection.js'

export class CourseModel {
	static async getAll() {
		const db = await mongoConnect()
		return db.find({}).toArray()
	}

	static async getById({ id }) {
		const db = await mongoConnect()
		const objectId = new ObjectId(id)
		return db.findOne({ _id: objectId })
	}

	static async create({ data }) {
		const db = await mongoConnect()
		await db.insertOne(data)
		return data
	}

	static async delete({ id }) {
		const db = await mongoConnect()
		const objectId = new ObjectId(id)
		const { deletedCount } = await db.deleteOne({ _id: objectId })
		return deletedCount > 0
	}
	
	static async update({ id, data }) {
		const db = await mongoConnect()
		const objectId = new ObjectId(id)

		const res = await db.findOneAndUpdate({ _id: objectId }, { $set: data }, { returnNewDocument: true })

		if (!res) {
			return false
		}

		return res
	}
}
