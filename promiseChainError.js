function asyncFunc1(){
    return Promise.resolve('asyncFunc1')
}

function asyncFunc2() {
    return Promise.resolve('asyncFunc2')
}

function asyncFunc3() {
    return Promise.reject('asyncFunc3 error')
}

asyncFunc1()
    .then(asyncFunc2)
    .then(asyncFunc3, (reason) => {
        console.log(reason)
    })