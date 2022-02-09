abstract class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    isStudent(): this is Student {
        return this instanceof Student;
    }
    isStaff(): this is Staff {
        return this instanceof Staff; 
    }
}

class Student extends User{
    grade: number;
    constructor(name: string, grade: number) {
        super(name)
        this.grade = grade
    }
}

class Staff extends User {
    salary: number;
    constructor(name: string, salary: number) {
        super(name)
        this.salary = salary
    }
}

function printObjType(obj: User) {
    if (obj.isStaff()) {
        // obj 的类型被收窄为 Staff
    } else if (obj.isStudent()){
        // obj 的类型被收窄为 Student
    }
}

export {Staff, Student}


