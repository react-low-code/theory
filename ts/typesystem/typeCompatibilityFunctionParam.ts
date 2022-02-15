let func1: (a: string, b: number) => void = (a: string, b: number) => {console.log(a, b)}
let func2: (a: string) => void = (a: string) => {console.log(a)}

func1 = func2
func2 = func1