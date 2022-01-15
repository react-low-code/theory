let startHandle: (fn: (a: number, b: number) => void) => void

startHandle = (fn: (a: number, b: number) => void) => {
    if (Math.random() < 0.5) {
        fn(1,2)
    } else {
        fn(3,4)
    }
}

function printResult(val1: number,val2: number): void {
    console.log(val1 + val2)
}

startHandle(printResult)


// type myFnType = (a: number, b: number) => void

// let startHandle: (fn: myFnType) => void

// startHandle = (fn: myFnType) => {
//     if (Math.random() < 0.5) {
//         fn(1,2)
//     } else {
//         fn(3,4)
//     }
// }

// 参数 age 可传也可以不传，如果传了就必须是 number 类型

function printDetail(name: string, age?: number): void {
    console.log(`name is ${name}, age is ${age ? age : '??'}`)
}
printDetail('Bella', 23) // 不会有类型错误
printDetail('Bella', undefined) // 不会有类型错误
printDetail('Bella', '3') // 有类型错误

/**
 function printDetail(name: string, age: number = 23): void {
    console.log(`name is ${name}, age is ${age}`)
 }
 */
