import Router from 'express'
import { CourseController } from '../controllers/course.controller.js'

export const courseRouter = Router()

courseRouter.get('/', CourseController.getAll)
courseRouter.post('/', CourseController.create)
courseRouter.get('/:id', CourseController.getById)
courseRouter.put('/', CourseController.update)
courseRouter.delete('/:id', CourseController.delete)