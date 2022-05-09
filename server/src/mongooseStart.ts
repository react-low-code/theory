import mongoose from 'mongoose'

async function connect() {
    await mongoose.connect('mongodb://localhost:27017/school')
}

connect().catch((err) => {
    console.log('连接失败',err)
})

interface ITeacher {
    name: String,
    grade: Number,
    salary: Number
}

const teacherSchema = new mongoose.Schema<ITeacher>({
    name: String,
    grade: Number,
    salary: Number
});

const Teacher = mongoose.model('teacher', teacherSchema);

const heyu = new Teacher({
    name: 'heyu',
    grade: 5,
    salary: 1000
})

heyu.save().then(() => {
    Teacher.find({ grade: 6 }, (err: mongoose.CallbackError, result: ITeacher) => {
        console.log(result)
    });
    
    Teacher.updateMany({ grade: 6 }, {$inc: {salary: 1000}}).exec()
})

