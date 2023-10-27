import mongoose from "mongoose"

const courseSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	language: { type: String, required: true },
})

export const courseModel = mongoose.model("courseModel", courseSchema)
