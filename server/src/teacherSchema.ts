import mongoose from 'mongoose'

interface ITeacher {
    name: String,
    grade: Number,
    salary: Number,
    findSimilarGrade: (con: mongoose.Connection) => Promise<any>
}
 
const teacherSchema = new mongoose.Schema<ITeacher>({
    name: String,
    grade: Number,
    salary: Number
});

//  静态方法中的 this 指的是 Model
teacherSchema.statics.findSimilarGrade = async function(grade: number) {
    return await this.find({grade})
}

// teacherSchema.static('findSimilarGrade', async function(grade: number) {
//     return await this.find({grade})
// })

/**
 * 查询与当前 document 有相同 grade 的 documents
 * @returns 
 */
teacherSchema.methods.findSimilarGrade = async function() {
    return await this.db.models['teacher'].find({grade: this.grade})
}

export default teacherSchema