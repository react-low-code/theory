function readonly<T>(target: T, name: string, descriptor: PropertyDescriptor){
    descriptor.writable = false
}

function vPrefix(target: typeof User, name: string, descriptor: PropertyDescriptor) {
    return {
        ...descriptor,
        value: () => {
            return `v${descriptor.value()}`
        }
    }
}

class User {
    @vPrefix
    static getVersion() {
        return '1.0.0'
    }

    @readonly
    printName() {
        return 'default name'
    }
}
