interface User {
    name: string
}

interface Student extends User {
    grade: string
}

const Bella = {
    name: 'Bella'
}

function printType(value: User | Student) {
    if ('grade' in value) {
        // 在 if 块中，value 的数据类型被收窄为 Student 类型
        console.log('它是 Student 类型',value.name + ':' + value.grade)
    } else {
        // 在 else 块中，value 的数据类型被收窄为 User 类型
        console.log('它是 User 类型',value.name)
    }
}

printType(Bella)