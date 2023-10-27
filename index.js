import express from 'express'
import cors from 'cors'
import { courseRouter } from './src/routes/course.routes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/courses', courseRouter)

app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`)
})
