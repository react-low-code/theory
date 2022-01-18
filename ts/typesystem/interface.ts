const user = {
    name: 'bella',
    age: 23
}

const student: {
    name: string;
    age: number
} = {
    name: 'bella',
    age: 23
}

const pig: {
    name: string;
    age: number
} = {
    name: 'hua',
    age: 2
}

export interface BaseInfo {
    name: string;
    age: number;
}

const bella: BaseInfo = {
    name: 'bella',
    age: 23,
}

const hua: BaseInfo = {
    name: 'hua',
    age: 2,
}

interface DepartmentInfo {
    departmentName: string;
    readonly departmentId: string;
}

let department: DepartmentInfo = {
    departmentName: '研发部',
    departmentId: '1',
}

department.departmentId = '2' // 类型检查会报错

department = {      // 类型检查不会报错
    departmentName: '研发部',
    departmentId: '2',
}

interface Staff extends BaseInfo, DepartmentInfo{
    staffId: string;
}

interface Human {
    name: string;
}

interface Human {
    sex: string;
    [key: string]: string
}

const Li: Human = {
    sex: '女',
    name: 'li'
}