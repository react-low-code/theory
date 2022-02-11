function genericFunc<T,U>(a: T, b: U): [T, U] {
    return [a, b];
}
console.log( genericFunc<string, number>('a', 3) ) // lineA
console.log( genericFunc(3, 'a')) // lineB

export { genericFunc }