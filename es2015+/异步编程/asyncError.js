async function foo() {
    const result1 = await new Promise((resolve, reject) => setTimeout(reject, 1000, '1'))
    // 1秒之后 promise 的状态变成 rejected
   const result2 = await new Promise((resolve, reject) => setTimeout(reject, 1000, 'error in 2'))
}

foo().catch((error) => {
    console.log(error)
})

async function foo2() {
    try {
        const result1 = await new Promise((resolve, reject) => setTimeout(reject, 1000, '1'))
        // 1秒之后 promise 的状态变成 rejected
        const result2 = await new Promise((resolve, reject) => setTimeout(reject, 1000, 'error in 2'))
    } catch (error) {
        console.log(error)
    }
}

foo2()