class ParentClass  {
    #name = 'ParentClass'
    getName() {
        // this 的指向？
        return this.#getUpperName()
    }
    #getUpperName() {
        return this.#name.toLocaleUpperCase()
    }
}

class ChildClass  extends ParentClass {}

const parentObj = new ParentClass()
const childObj = new ChildClass()

console.log(parentObj.getName())
console.log(childObj.getName())
