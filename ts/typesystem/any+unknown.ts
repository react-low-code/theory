let valueUnknown: unknown
let valueAny: any

valueUnknown = 'hello' // 不会有类型错误
valueAny = 'hello' // 不会有类型错误

valueAny.trim() // 不会有类型错误
valueUnknown.trim() // 类型错误

valueAny() // 不会有类型错误
valueUnknown() // 类型错误

const stringA: string = valueAny // 不会有类型错误
const stringB: string = valueUnknown // 类型错误