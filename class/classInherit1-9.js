class ParentClass  {
    static #field = 'ParentClassField'
    static getField() {
        // 这里的 this 指向什么呢？
        return this.#field
    }
}

class ChildClass  extends ParentClass {}
console.log(ParentClass.getField()) // lineA
console.log(ChildClass.getField()) // lineB 会抛出错误