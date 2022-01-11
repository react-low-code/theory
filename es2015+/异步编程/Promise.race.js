function timeout(ms, promise) {
    function delay(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                reject(new Error('Timeout after '+ms+' ms')); // lineA
            }, ms);
        })    
    }

    return Promise.race([
        promise,
        delay(ms)
    ])
}

timeout(5000, httpGet('http://example.com/get/something'))
.then(function (value) {
    console.log('Contents: ' + value);
})
.catch(function (reason) {
    console.error('Error or timeout', reason);
});