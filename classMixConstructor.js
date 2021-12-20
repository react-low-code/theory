function User(name, age){
    this.name = name;
    this.age = age;
}

User.prototype.sayName = function() {
    return this.name;
}

// 用 class 语法定义一个 Student 类，Student 类继承自 User
class Student extends User{
    grade
    constructor(grade, name, age) {
        super(name, age);
        this.grade = grade;
    }

    getGrade() {
        return this.grade;
    }
}

const student = new Student(6, '小明', 12);
// student 是 Student 类的实例吗？
console.log(student instanceof Student); // true
// student 是 User 构造函数的实例吗？
console.log(student instanceof User); // true
console.log(student);