interface U {
    relationship?: this
    printName(instance: this): void
}

class User implements U {
    relationship?: this;
    name: string = 'unknown'
    printName(instance: this) {
        console.log(instance.name)
    }
    setRelationship(relationship: this) {
        this.relationship = relationship
    }
}

class Student extends User {
    grade: number = 0
}

const user = new User()
const student = new Student()
const otherStudent = new Student()
student.printName(student) // 没有类型错误
student.printName(user) // 有类型错误
student.setRelationship(otherStudent) // 没有类型错误
user.printName(student) // 没有类型错误