class User {
    name;
    age;
    
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        return this.name
    }
}

// 使用 User 类实例化一个对象，赋值给 user
const user = new User('小明', 25);
// user 是 User 类的实例吗？
console.log(user instanceof User); // true
console.log(user);