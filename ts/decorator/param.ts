function toNumber(target: any, name: string, index: number) {
    Reflect.defineMetadata(name+'_toNumber', true, target)
}

class User {
    age: number | string
    constructor(@toNumber age: number | string) {
        this.age = age
    }

    getAge() {
        const toNumber = Reflect.getMetadata('undefined_toNumber', User)
        if (toNumber && typeof this.age === 'string') {
            return Number(this.age)
        } else {
            return this.age
        }
    }
}

export { User }