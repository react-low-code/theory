function getDate(timestamp: number):number;
function getDate(str: string): Date;
function getDate(s: number| string): number | Date {
    if (typeof s === "number") {
        return s
    } else {
        return new Date(s)
    }
}

// 重载签名与实现签名不兼容
// function getMonth(timestamp: number): number
// function getMonth(date: Date): number
// function getMonth(d: Date): number {
//     if (typeof d === 'number') {
//         return new Date(d).getMonth()
//     } else {
//         return d.getMonth()
//     }
// }