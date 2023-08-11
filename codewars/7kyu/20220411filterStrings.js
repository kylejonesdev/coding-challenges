//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
// Given an array with numbers and strings, return a new array with the strings filtered out
function filter_list(l) {
    return(l.filter((item) => typeof item === 'number'));
}