async function foo() {
    const result1 = await new Promise((resolve) => setTimeout(resolve, 1000, '1'))
    const result2 = await new Promise((resolve) => setTimeout(resolve, 1000, '2'))
 }
 
 foo()