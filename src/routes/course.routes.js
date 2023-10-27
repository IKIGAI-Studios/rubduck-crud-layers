import Router from 'express'
import CourseController from '../controllers/course.controller.js'

const router = Router()

router.post('/course', CourseController.createCourse)
router.get('/course/:id', CourseController.readCourse)
router.put('/course', CourseController.updateCourse)
router.delete('/course/:id', CourseController.deleteCourse)

export default router