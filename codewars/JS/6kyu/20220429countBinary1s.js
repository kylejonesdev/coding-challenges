//https://www.codewars.com/kata/526571aae218b8ee490006f4/javascript

//Create a function that converts a number to base 2 and returns the count of 1's in the result.

var countBits = function(n) {
    let count = 0;
    n.toString(2).split('').forEach(item => item === '1' ? count++ : count);
    return count;
};