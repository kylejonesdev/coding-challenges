//Calculate the n-th Fibonacci number
var fib = function(n) {
    let arr = [0, 1];
    for(let i = 1; i < n; i++) {
        arr.push((arr[arr.length - 2]) + (arr[arr.length - 1]));
    }
    return arr[n];
};