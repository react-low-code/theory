function printType(value: string | number) {
    if (typeof value === 'string') {
        // value 的类型被收窄为 string
        console.log('value 是 string 类型')
    } else {
        // value 的类型被收窄为 number
        console.log('value 是 number 类型')
    }
}

interface User {
    name: string
}

interface Student {
    name: number
}

/**
 * 如果 User 类型的 name 字段为 string 类型，Student 类型的 name 字段为 number 类型
 * @param obj 
 */
function printObjType(obj: User | Student) {
    if (typeof obj.name === 'string') {
        // value 的类型被收窄为 User
    } else {
        // value 的类型被收窄为 Student
    }
}

export {printType, printObjType}