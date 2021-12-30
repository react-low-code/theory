function timeout(ms, promise) {
    return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(reject)
        setTimeout(function () {
            reject(new Error('Timeout after '+ms+' ms')); // lineA
        }, ms);
    });
}

timeout(5000, httpGet('http://example.com/get/something'))
    .then(function (value) {
        console.log('Contents: ' + value);
    })
    .catch(function (reason) {
        console.error('Error or timeout', reason);
    });