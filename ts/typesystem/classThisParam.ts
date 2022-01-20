class User{
    name: string = 'unknown'
    // 只能在当前类的上下文中调用 printName 方法，注意 this 类型的动态性
    printName(this: this) {
        console.log(this.name)
    }
}

const user = new User()
user.printName() // 没问题
const printName = user.printName
printName() // 有问题