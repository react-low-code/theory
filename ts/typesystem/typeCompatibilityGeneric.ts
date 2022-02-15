interface Generic1<T> {
    name: string
}

const one: Generic1<string> = {name: 'one'}
const two: Generic1<number> = one // Generic1<number> 与 Generic1<string> 兼容

interface Generic2<T> {
    name: T
}

const three: Generic2<string> = {name: 'one'}
const four: Generic2<number> = one // Generic2<number> 与 Generic2<string> 不兼容

