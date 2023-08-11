//Given an array, sort the odd numbers while leaving the even numbers in place
function sortArray(array) {
    let arrayOfOdds = [...array].filter(item => item % 2 !== 0).sort((a, b) => a - b)
    let copyIndex = -1;
    return array.map(item => (item % 2 !== 0) ? arrayOfOdds[++copyIndex] : item);
}