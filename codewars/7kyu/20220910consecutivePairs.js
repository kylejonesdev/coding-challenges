//Compare every pair of items in an array and return the count of pairs with consecutive integers

function pairs(ar){
    let res = 0;
    for(let i = 0; i < ar.length; i += 2) {    
        if(Math.abs(ar[i] - ar[i + 1]) === 1) res ++;
    }
    return res;
};