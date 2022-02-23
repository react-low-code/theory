function NonWritable<T>(target: T, propertyKey: keyof T) {
    console.log('NonWritable')

    Object.defineProperty(target, propertyKey, {
        writable: false
    });
}

function NonEnumerable<T>(target: T, propertyKey: keyof T) {
    console.log('NonEnumerable')

    Object.defineProperty(target, propertyKey, {
        enumerable: false
    });
}

class User {
    @NonEnumerable
    @NonWritable
    name?: string
}

function writable(bool: boolean) {
    console.log('writable factory')
    return function <T>(target: T, propertyKey: keyof T) {
        console.log('writable decorator')

        Object.defineProperty(target, propertyKey, {
            writable: bool
        });
    }
}

function enumerable(bool: boolean) {
    console.log('enumerable factory')
    return function <T>(target: T, propertyKey: keyof T) {
        console.log('enumerable decorator')

        Object.defineProperty(target, propertyKey, {
            enumerable: bool
        });
    }
}

// class User {
//     @enumerable(false)
//     @writable(false)
//     name?: string
// }