const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));

Promise.allSettled([promise1, promise2])
    .then((results) => {
        results.forEach((result) => console.log(result.status))
});

// 输出
// "fulfilled"
// "rejected"