//Example 1
/* 
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
console.log(fetchPromise);

fetchPromise.then(response => {
    console.log(`Received response: ${response.status}.`);
});
console.log("Started request...");
 */

//Example 2
/* 
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then(response => {
    const jsonPromise = response.json();
    jsonPromise.then( json => {
        console.log(json[0].name);
    });
});
 */

//Example 3 & 4
/* 
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
    .then(response => {
        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then(json => {
        console.log(json[0].name);
    });
*/
//Example 5
/* 
const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
    .then( response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then (json => {
        console.log(json[0].name);
    })
    .catch(error => {
        console.error(`Could not get products: ${error}`);
    });
*/
//Example 6 - Promise.all()
/* 
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then(responses => {
        for (const response of responses) {
            console.log(`${response.url}: ${response.status}`);
        }
    })
    .catch(error => {
        console.error(`Failed to fetch: ${error}`)
    });
 */
//Example 7 - Promise.any()
/* 
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    .then(response => {
        console.log(`${response.url}: ${response.status}`);
    })
    .catch(error => {
        console.error(`Failed to fetch: ${error}`)
    });
 */
//Example 8 - Async/Await
/*
async function fetchProducts() {
    try {
        const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const json = await response.json();
        console.log(json[0].name);
    }
    catch(error) {
        console.error(`Could not get products: ${error}`);
    }
}

fetchProducts();
*/
//Example 9 - include try/catch
async function fetchProducts() {
    try {
        const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const json = await response.json();
        return json;
    }
    catch(error) {
        console.error(`Could not get products: ${error}`);
    }
}
const jsonPromise = fetchProducts();
jsonPromise.then(json => console.log(json[0].name));
