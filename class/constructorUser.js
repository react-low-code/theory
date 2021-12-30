function User(name, age){
    this.name = name;
    this.age = age;
}

User.prototype.sayName = function() {
    return this.name;
}

// 使用 new 关键字调用 User 函数，并将结果赋值给变量 user
var user = new User('小明', 25);
// user 是 User 构造函数的实例吗？
console.log(user instanceof User) // true
console.log(user);