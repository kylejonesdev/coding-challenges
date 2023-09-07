function f(n){
    let sum = 0;
    if(!Number.isInteger(n) || n < 1 ) return false;
    for(let i = n; i > 0; i--) {
        sum += i;
    }
    return sum;
}

// Recursion causes a stack overflow
// function f(n){
//   if(n === 0) return n;
//   return n + f(n-1);
// };