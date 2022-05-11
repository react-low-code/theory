import { Schema } from 'mongoose'
import  teacherSchema from './teacherSchema.js'

new Schema({
    name: {
        type: String,
        index: true,
        unique: true
    },
    age: {
        type: Number,
        validate: {
            validator: (v: number) => {
                return v % 4 === 0
            },
            message: 'age 不能被4整除'
        }
    },
    email: {
        type: String,
        validate: {
            validator: (v: string) => Promise.resolve(false),
            message: 'email 验证 失败'
        }
    },
    updated: Date,
    binary: Buffer,
    mixed: Schema.Types.Mixed,
    _myId: Schema.Types.ObjectId,
    map: Map,
    isNew: {
        type: Boolean,
        required: true,
    },
    BooleanArr: [Boolean],
    address: {
        city: String,
        area: String, 
    },
    subSchema: teacherSchema
})