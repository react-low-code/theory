interface User {
    name: string
}

interface Student extends User{
    garde: number
}

// 这是类型谓词函数
function predicateStudent(value: Student | User): value is Student {
    return typeof (value as any).garde === 'number'
}

function printObjType(obj: User | Student) {
    if (predicateStudent(obj)) {
        // value 的类型被收窄为 Student
    } else {
        // value 的类型被收窄为 User
    }
}