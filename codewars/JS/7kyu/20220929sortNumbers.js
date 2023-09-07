//In a string of mixed chars and digits, return only the digits as a number
var FilterString = function(value) {
    let res = '';
    for(let letter of value) {
      letter.toUpperCase() == letter.toLowerCase() ? res += letter : res;
    }
    return +res;
}