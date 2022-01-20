interface User {
    name: string;
    nickName: string;
    printName: () => void
}

// TypeScript 程序不能运行
class UserImplement implements User {
    name: string = 'Bella'
    // 这是私有字段
    private nickName: string = 'hu'
    printName() {
        console.log(this.name)
    }
}