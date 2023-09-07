//https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

//Sort an array of strings by the length of each string

function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length);
};