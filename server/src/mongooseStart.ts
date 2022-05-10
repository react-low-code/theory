import mongoose from 'mongoose'

async function connect() {
    await mongoose.connect('mongodb://localhost:27017/school', {
        autoIndex: false,
        socketTimeoutMS: 300
    })
}

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
    grade: 3,
    salary: 100
})

heyu.save().then(() => {
   
    console.log('save...')
    // Teacher.updateMany({ grade: 6 }, {$inc: {salary: 1000}}).exec()
})


setTimeout(() => {
    connect()
    .then(() => {
        Teacher.find({ grade: 3 }, (err: mongoose.CallbackError, result: ITeacher) => {
            console.log(result)
        });
    })
    .catch((err) => {
        console.log('连接失败',err)
    })
}, 6000);
