const myError = new Error('Problem!');
Promise.reject(myError)
    .catch(err => console.log(err === myError)); // true

Promise.resolve('123')
    .then(x => console.log(x)); // 123

const p = new Promise(() => null);
console.log(Promise.resolve(p) === p); // true

const fulfilledThenable = {
    then(resolve) {
        resolve('hello');
    }
};
// p2 的状态是 fulfilled
const p2 = Promise.resolve(fulfilledThenable)

const rejectedThenable = {
    then(resolve, reject) {
        reject('reject hello');
    }
}
// p3 的状态是 rejected
const p3 = Promise.resolve(rejectedThenable)