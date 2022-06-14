//Write a function to return the value of a given factorial

function factorial(n){
    return n === 0 ? 1 : n * factorial(n - 1);
}