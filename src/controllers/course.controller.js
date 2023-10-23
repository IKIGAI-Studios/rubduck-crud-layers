import { courseModel } from "../models/course.model";

export function createCourse({title, description, language}) {
    const newCourse = courseModel({title, description, language});
    // Aquí creas el curso en la base de datos de mongo usando el modelo
}
export function readCourse({id}) {
    // Aquí traes el curso desde la base de datos de mongo
    return newCourse
}

export function updateCourse({id, title, description, language}) {
    const newCourse = courseModel({title, description, language});
    // Aquí actualizas el curso en la base de datos de mongo
}

export function deleteCourse({id}) {
    // Aquí borras el curso en la base de datos de mongo usando el modelo
}

