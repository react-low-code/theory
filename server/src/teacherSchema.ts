import mongoose from 'mongoose'

interface ITeacher {
    name: String,
    grade: Number,
    salary: Number
}
 
export default new mongoose.Schema<ITeacher>({
    name: String,
    grade: Number,
    salary: Number
});