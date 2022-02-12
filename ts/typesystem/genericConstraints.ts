interface User {
    name: string
}

interface Student extends User {
    age: number
}
const ci = {
    name: 'Ci',
    age: 2
}

// T 的值必须扩展自 User 类型，K 的值可以是任何类型
function print<T extends User, K>(user: T, b: K): void{/**do somethine */}
print<Student, string>(ci, '3') // 没毛病
print<string, string>('tt', 'kk') // 不满足泛型约束，这是因为 string 类型不是扩展自 User 类型

export { print }