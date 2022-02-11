interface genericFunc {
    <T>(a: T): T
}

interface genericInterface<T> {
    a: T,
    getA: () => T
}

// 给接口传递类型变量
const myObj: genericInterface<number> = {
    a: 2,
    getA: () => {
        return myObj.a
    }
}

interface genericInterface2<T> {
    a: T,
    printInfo<U>(info: U): void
}

const myObj2: genericInterface2<number> = {
    a: 3,
    printInfo: <U>(info: U): void => {
        console.log(info)
    }
}

myObj2.printInfo<string>('e')

class myClass implements genericInterface<number> {
    a: number;
    getA(this: this){
        return this.a
    }
}