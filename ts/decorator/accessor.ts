function toUpperCase<T>(target: T, name: string, descriptor: PropertyDescriptor) {
    return {
        ...descriptor,
        get: function(): string{
            const val: string = descriptor!.get!.call(this)
            return val.toUpperCase()
        },

        set: function(val: string) {
            // todo someThing
            descriptor!.set!.call(this, val)
        }
    }
}

class User {
    firstName: string = 'bella'
    lastName: string = 'Q'

    @toUpperCase
    get fullName() {
        return this.firstName + ' ' + this.lastName
    }

    set fullName(fullName: string) {
        const [firstName, lastName] = fullName.split(' ')
        this.firstName = firstName
        this.lastName = lastName
    }
}

const user = new User()

console.log(user.fullName)

export {toUpperCase}