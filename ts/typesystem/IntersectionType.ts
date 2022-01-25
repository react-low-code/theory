interface User {
    name: string;
    age: number
}

interface Student {
    name: string;
    age: string;
    grade: number;
}

// 不能进行接口扩展，因为 User 和 Student 中的 age 属性不兼容
interface TypeFromExtends extends User, Student {}

// 能够进行接口交叉
type TypeFromIntersection = User & Student
// TypeFromIntersection 的形状如下：
/**
 * interface TypeFromIntersection {
 *  name: string;
    age: never;
    grade: number;
 * }
 */