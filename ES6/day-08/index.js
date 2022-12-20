
console.log('hi')

// asyncronus

const taskOne = ()=>{return new Promise((resolve, reject) => {
    resolve('complect task 1');
})};

const taskTwo = ()=>{return new Promise((resolve, reject) => {
    // resolve('complect task 2')
    setTimeout(() =>{
        resolve('complect task 2')
    },2000)
})};

const taskThree = ()=>{return new Promise((resolve, reject) => {
    resolve('complect task 3');
})};

const taskFour = ()=>{return new Promise((resolve, reject) => {
    resolve('complect task 4');
})};

taskOne()  // promise work by, then on a chain way. and it work on a searial way.
    .then((res) =>{console.log(res)})  // 1
    .then(taskTwo) 
    .then((res) => console.log(res))  // 2
    .then(taskThree)
    .then((res) => console.log(res)) // 3
    .then(taskFour)
    .then((res) => console.log(res))  // 4
    .catch((err) => console.log(err));  // one errow have, than stop the chain.

    console.log('bye');