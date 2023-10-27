import { CourseModel } from '../models/course.model.js'

export class CourseController {

	static async getAll(req, res) {
		const courses = await CourseModel.getAll()
    	res.json(courses)
	}

	static async getById(req, res) {
		const { id } = req.params
		const course = await CourseModel.getById({ id })
		if (course) return res.json(course)
		res.status(404).json({ message: 'Curso no encontrado' })
	}

	static async create(req, res) {
		console.log(req.body)
		const newCourse = await CourseModel.create({ data: req.body })
	
		res.status(201).json(newCourse)
	}

	static async delete(req, res) {
		const { id } = req.params

		const result = await CourseModel.delete({ id })

		if (result === false) {
		return res.status(404).json({ message: 'Curso no encontrado' })
		}

		return res.json({ message: 'Curso eliminado' })
	}

	static async update(req, res) {
		const { id } = req.params

		const updatedCourse = await CourseModel.update({ id, data: req.body })

		return res.json(updatedCourse)
	}
}
