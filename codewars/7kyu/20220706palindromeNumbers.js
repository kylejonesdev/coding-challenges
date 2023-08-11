//Determine how many times a number must be added to a reversed version of itself to result in a palindrome.

var palindromeChainLength = function(n) {
    const revNumber = num => Number(String(num).split('').reverse().join(''));
    let inc = 0;
    while(n !== revNumber(n)) {
      n += revNumber(n);
      inc++;
    }
    return inc;
};