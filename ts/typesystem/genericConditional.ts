type MyType<T> = T extends string ? T[]: never[];

let stringArr: MyType<string> // string[]
let numberArr: MyType<number> // never[]
let unionArr: MyType<1|'1'|string> // never[] | string[] 