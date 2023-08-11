//Calculate the sum of n + n / 2 + n / 4 ... using integer division.

//Using recursion
function halvingSum(n) {
    return n < 1 ? n : n += halvingSum(Math.floor(n / 2));
}

//Not using recursion
/*
function halvingSum(n) {
    let result = 0;
    while (n > 0) {
        result += n;
        n = Math.floor(n / 2);
    }
    return result;
}
*/