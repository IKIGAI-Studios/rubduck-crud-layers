import { courseModel } from "../models/course.model";

export function createCourse({ title, description, language }) {
	try {
		const newCourse = courseModel({ title, description, language });
		newCourse.save();
	} catch (error) {
		return error;
	}
}
export function readCourse({ id }) {
	try {
		courseModel.findById(id);
		return newCourse;
	} catch (error) {
		return error;
	}
}

export function updateCourse({ id, title, description, language }) {
	try {
		const newCourse = courseModel({ title, description, language });
		courseModel.findByIdAndUpdate(id, { title, description, language });
	} catch (error) {
		return error;
	}
}

export function deleteCourse({ id }) {
	try {
		courseModel.findByIdAndDelete(id);
	} catch (error) {
		return error;
	}
}
