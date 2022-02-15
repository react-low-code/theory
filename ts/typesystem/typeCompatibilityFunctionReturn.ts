let func1: () => string = () => {return '1'}
let func2: () => number = () => {return 1}

// func1 的返回值是 string，func2 的返回值是 number，他们相互不兼容
func1 = func2
func2 = func1

let func3: (x: string) => {id: string} = (x: string) => ({id: '1'})
let func4: (x: string) => {id: string, name: string} = (x: string) => ({id: '1', name: 'Bella'})

// func4 的类型兼容 func3 的类型
func3 = func4
// func3 的类型不兼容func4 的类型
func4 = func3
