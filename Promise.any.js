const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));


Promise.any([promise1, promise2, promise3])
    .then((value) => console.log(value)); // quick