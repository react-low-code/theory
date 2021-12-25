class ParentClass  {
    #name = 'ParentClass'
    getName() {
        // this 的指向？
        return this.#name
    }
}

class ChildClass  extends ParentClass {}

const parentObj = new ParentClass()
const childObj = new ChildClass()

console.log(parentObj.getName())
console.log(childObj.getName())
