//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n) {
    let arr = n.toString().split('');
    let result = arr.reduce((acc, item) => acc + parseInt(item),0);
    return result.toString().length > 1 ? digital_root(result) : result;
  }