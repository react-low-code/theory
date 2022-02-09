const age: any = 23.44;

// age 的 原始数据类型是 any ，在这里将它断言为 number 类型
(age as number).toFixed(0);
(<number>age).toFixed(0)
