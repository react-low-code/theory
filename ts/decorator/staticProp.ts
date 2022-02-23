function toUpper(target: any, key: string) {
    const cache: {[key: string]: any} = {}
   const desc = Object.getOwnPropertyDescriptor(target, key)
   cache[key] = desc?.value

   Object.defineProperty(target, key, {
       enumerable: true,
       configurable: true,
       get() {
         const value = cache[key]
         return typeof value === 'string' ? value.toUpperCase() : value
       },
       set(value: any) {
        cache[key] = value
       }
   })

   return target
}

export default class User {
    @toUpper
    static version: string = 'v2.3.4'
}