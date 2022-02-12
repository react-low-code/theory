class User{/**do something */}
class Tools{/**do something */}

function genericFactory<T>(Ctor: new () => T):T {
    return new Ctor()
}

const user: User = genericFactory<User>(User)
const tools: Tools =  genericFactory<Tools>(Tools)

