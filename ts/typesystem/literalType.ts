const type = 'one' // 等同于 const type: 'one' = 'one'

// 只能将 Bella 赋值给变量 hello
let hello: 'Bella' = 'Bella'
hello = 'one' // 类型错误

// 这个函数的返回值只能是true，它的第二个参数要么没有，要么为 3
function compare(one: string, two?: 3): true {
    console.log(one, two)
    return true
}