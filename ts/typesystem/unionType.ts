// 能将字符串和数值类型赋值给变量 type
let type: string|number = 1
type = '1'

// 能将 0、1、布尔值赋值给变量 result
let result: 0 | 1 | boolean = true
result = 2 // 类型错误

interface User {
    name: string
}

interface Student extends User{
    grade: number;
}

function printInfo(person: User|Student) {
    console.log(person.name + ':' + person.grade)
}