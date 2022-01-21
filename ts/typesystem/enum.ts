
export enum Tab {
    one,
    two
}

console.log(Tab)

let index: Tab.one = Tab.one;
index = Tab.two;

// const enum Tab {
//     one,
//     two
// }

// console.log(Tab) // error
// console.log(Tab.one) // => console.log(0 /* one */)

interface Page {
    name: string;
    tabIndex: Tab;
}

const page: Page = {
    name: '首页',
    tabIndex: Tab.two // 将枚举成员赋给枚举类型的变量
}

page.tabIndex = 0 // 将数值字面量赋给枚举类型的变量


