class Information<T, U> {
    detail: T;
    title: U;
    constructor(detail: T, title: U) {
        this.detail = detail
        this.title = title
    }
}

// 在实例化类的时候将类型传给类型参数
new Information<string, string>('detail', 'title')

class SubClass<C, K> extends Information<C, K> {/* do something*/}
new SubClass<number, string>(2,'title')