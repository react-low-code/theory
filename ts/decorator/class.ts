type Ctor = new (...args: any[]) => Object;

function withLog<T extends Ctor>(ctor: T){
    // 返回一个继承自原始类的新类
    return class extends ctor {
        log() {
            console.log('Reported')
        }
    }
}

@withLog
class User {
    name?: string
}

const user = new User();
// 装饰器不会改成类的类型
(user as any).log()

export {withLog}