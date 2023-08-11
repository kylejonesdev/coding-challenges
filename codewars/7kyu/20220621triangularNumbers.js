// Return the nth triangular number

function triangular( n ) {
    //recursion takes too long with large numbers;
    //return n > 0 ? n + triangular(n - 1) : 0;
    return n >= 0 ? n * (n + 1) / 2 : 0;
}