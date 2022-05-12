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

teacherSchema.pre('save', function() {
    console.log('save pre one')
})

teacherSchema.pre('save', function() {
    console.log('save pre two')
})

teacherSchema.post('save', function() {
    console.log('save post one')
})
// document 中间件
teacherSchema.pre('remove', { document: true, query: false }, function() {
    console.log('移除 document');
})

// query 中间件
teacherSchema.pre('remove', { document: false, query: true }, function() {
    console.log('即将执行Model.remove()，从 collection 中移除所有符合条件的 document');
})


export default teacherSchema