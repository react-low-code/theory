interface myFnType {
    (a: number, b: number): void
}

interface Arithmetic {
    new (a: number, b: number): Add;
    type: string;
}

// interface Arithmetic {
//     (a: number, b: number): number;
//     type: string;
// }
// function calculate (a: number, b: number): number {
//     return a + b
// }

// calculate.type = 'add'

// const add: Arithmetic = calculate

// console.log(add(2,1)) // 3
// console.log(add.type) // add

class Add {
    a: number
    b: number
    static type: string
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    calculate() {
        return this.a + this.b
    }
}

function createAdd(isOdd: boolean, Ctor: Arithmetic) {
    return isOdd ? new Ctor(1,3) : new Ctor(2,4)
}

createAdd(false, Add)