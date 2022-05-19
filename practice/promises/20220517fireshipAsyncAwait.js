//Example 1 - Order of synchronous and asynchronous tasks
/*
console.log('Synchronous 1');

setTimeout(() => console.log(`Timeout 2`), 0);

Promise.resolve().then(() => console.log('Promise'));

console.log('Synchronous 4');
*/
/* 
//Console
Synchronous 1
Synchronous 4
Promise 3 //microtask queue
Timeout 2 //main task queue
*/

//Example 2
/*
const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

promise
    .then(res => res.json())
    .then(user => {
        throw new Error('uh oh');
        return user;
    }
    .catch(err => console.log());
console.log('Synchronous');
*/
//Console
/*
Synchronous
Hello delectus aut autem
*/
//Example 3
/*
const codeBlocker = () => {
    let i = 0;
    while(i < 1000000000) {i++}
    return console.log('billions');
}
console.log('Synchronous 1');
console.log(codeBlocker());
console.log('Synchronous 2');
//Expect the script to freeze until the while loop completes
*/
//Example 4 - Creating a promise
/*
const codeBlocker = () => {
    return new Promise((resolve, reject) => {
        // let i = 0;
        // while(i < 1000000000) {i++}
        // resolve(console.log('billions'));
        //This code here is still blocking, as only the resolution is a microtask
        return Promise.resolve()
            .then(v => {
                let i = 0;
                while(i < 1000000000) {i++}
                resolve(console.log('billions'));
            })
            //Non-blocking, as all work is performed in the microtask
    })
}
console.log('Synchronous 1');
console.log(codeBlocker());
console.log('Synchronous 2');
//Expect the script to freeze until the while loop completes
*/
//Example 5
/* 
const getFruit = async(name) => {
    const fruits = {
        pineapple: 'pine',
        peach: 'pea',
        strawberry: 'straw'
    }
    return fruits[name];
}
getFruit('peach').then(console.log)
 */
//Example 6
/* 
const makeSmoothie = async(name) => {
    const a = await getFruit('pineapple');
    const b = await getFruit('strawberry');
    //not good practice, as we are waiting twice for things that are not dependent on eachother.
    return [a, b];
}
makeSmoothie().then(console.log);
*/
//Example 7
/*
const makeSmoothie = async(name) => {
    try {
        const a = getFruit('pineapple');
        const b = getFruit('strawberry');
        smoothie = Promise.all([a, b]);

        throw 'Oops!'; //try error handling

        return smoothie;
        //Instead, launch all promises at same time, and return once they are all fulfilled
    } catch(err) {
        console.log(err);
        return 'Something'; //Ignores error and continues with returned value
        throw 'Broken'; //Ends the program
    }
}
makeSmoothie().then(console.log);
badSmoothie()
    .then(val => console.log({ val }))
    .catch(err => console.log({ err }));
*/
//Example 8
const fruits = ['peach', 'pineapple', 'strawberry'];

const smoothie = fruits.map(async v => {
    const emoji = await getFruit(v);
    console.log(emoji);
    return emoji;
    //This runs all promises concurrently, which may not be the expected behavior.
});

const fruitLoop = async() => {
    for (const f of fruits) {
        const emoji = await getFruit(f);
        console.log(emoji);
    }
    //This runs each promise before moving to the next.
}
fruitLoop();