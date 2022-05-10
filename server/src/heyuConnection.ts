import mongoose from 'mongoose'
import teacherSchema from './teacherSchema.js'

const conn = mongoose.createConnection('mongodb://localhost:27017/heyu');
// 这里用 conn.model 代替 mongoose.model
conn.model('teacher', teacherSchema)

export default conn