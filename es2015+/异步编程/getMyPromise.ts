function getMyPromise(p, finish = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (finish) {
            resolve(p)
            } else {
            reject(p)
            }
        }, 1000)
    })
}

const myPromise1 = getMyPromise('myPromise1的状态变成了rejected', false)
// 注意：在这里我将 myPromise1 传给了 p
const myPromise2 = getMyPromise(myPromise1, true)

myPromise2.then((val) => {
    console.log(`我被兑现了，并且兑现的值是: ${val}`)
}).catch((error) => {
    console.log(`我被拒绝了, 理由是: "${error}"`)
})

