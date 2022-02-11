function genericFunc<T>(a: T):T {
    return a;
}
console.log( genericFunc<string>('a').toUpperCase() )
console.log( genericFunc<number>(3).toFixed() )