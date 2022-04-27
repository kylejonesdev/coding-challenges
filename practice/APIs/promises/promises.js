let tracker = 0;

function APIFetch(APIID) {
    console.log(`Started API ID: ${APIID}.`)
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('Hi Mom');
            tracker ++;
            resolve(console.log(`Resolved API ID: ${APIID}.`));
        },2000)
    })
}

function realAPI() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}

/* let prom = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('Hi Mom');
        tracker = 1;
        resolve(console.log('resolved'));
    },2000)

}) */

function getTracker() {
    console.log(tracker);
}

APIFetch(1).then(() => getTracker())
.then(() => APIFetch(2)).then(() => getTracker())
.then(() => realAPI().then(console.log('Got it.')))
.then(() => console.log('Fourth thing.'));