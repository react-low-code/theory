class Staff {
    name: string = 'Qiu'
    printInfo() {
        console.log('我是 Staff,' + '名字是：'+ this.name)
    }
}

class Student {
    name: string = 'Qiu'
    printInfo() {
        console.log('我是 Student,' + '名字是：'+ this.name)
    }
}

function printInfo(value: Staff | Student) {
    if (value instanceof Staff) {
        // 在 if 块中，value 的数据类型被收窄为 Staff 类型
        console.log('它是 Staff 类型')
    } else {
        // 在 else 块中，value 的数据类型被收窄为 Student 类型
        console.log('它是 Student 类型')
    }
}

printInfo(new Student())