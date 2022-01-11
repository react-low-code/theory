class HelloFields {
    static allInstance = []
    static #appendInstance(item) {
        // 静态方法可以用 this 关键字，调用同一个类中的其他静态字段
        this.allInstance.push(item) // lineA
    }

    field = ''
    #lastName = ''
    #firstName = ''

    constructor(field) {
        this.field = field
        // 在构造函数和实例方法中使用 this.constructor 访问静态字段
        this.constructor.#appendInstance(this) // linB
    }

    changeField = (field) => {
        this.field = field
    }

    get fullName() {
        return this.#firstName + ' ' + this.#lastName
    }

    set fullName(name) {
        [this.#firstName, this.#lastName] = name.split(" ")
    }
}

console.log(HelloFields.allInstance) // []
new HelloFields('one')
console.log(HelloFields.allInstance) // [HelloFields]
