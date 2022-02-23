function toUpper(target: any, key: string) {
    target.__cache__  = {}
    const cache: { [attr: string]: string } = {}
    const desc: PropertyDescriptor = {
        enumerable: true,
        configurable: true,
        get() {
            return cache[key]?.toUpperCase()
        },
        set(val: string) {
             cache[key] = val
        }
    }
    Object.defineProperty(target.__cache__, key, desc)
 }
 
 class Base {
     __cache__: { [attr: string]: string } = {}
 }
 
 export default class User extends Base {
     @toUpper
     private name?: string;
 
     constructor(name: string) {
         super()
         this.setName(name)
     }
     getName() {
         return Object.getPrototypeOf(this).__cache__['name']
     }
     setName(val: string){
         Object.getPrototypeOf(this).__cache__['name'] = val
     }
 }