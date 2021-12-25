class ParentClass {
    static field = 'one'
    static getField() {
        return ParentClass.field
    }

    name = 'parent'
    getName() {
        return this.name
    }
}

class ChildClass extends ParentClass {
    static Field = super.field + '-child'
    static getField() {
        return super.getField() + '-' + ChildClass.Field
    }
    constructor() {
        super();
    }
    
    name = 'child'
    getName() {
        return super.getName() + '-' + this.name // lineA
    }
}