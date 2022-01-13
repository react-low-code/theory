// hobby 只有 exercise 和 eat 两种取值
/**
 * 如果在后来的某一天 hobby 的取值增加了，那么下面代码在 default 块中的 hobby 变量就不是 never了，这时 TypeScript 编译器会报类型错误
 */
function handleHobby(hobby: 'exercise' | 'eat') {
    switch(hobby) {
        case 'exercise':
            // 当 hobby 为 exercise 时
            break
        case 'eat':
            // 当 hobby 为 eat 时
            break
        default:
            // 这个地方是 never
            const neverVal: never = hobby
    }
}

// 这个函数永远运行不完，它不可能有返回值，所以它的返回值是never
function notTheEnd(): never{
    while(true) {
        // do something
    }
}

// 这个函数总是被终止执行，它不能顺利执行到函数终点，不可能有返回值，所以它的返回值是never
function alwaysError(): never {
    throw 'error'
}

