//Return the number of characters that have case-insensitive duplicates in a string.

function duplicateCount(text){
    let count = 0;
    let arrLetters = text.toLowerCase().split('').sort();
    arrLetters.forEach((item, index, arr) => { if(item !== arr[index - 1] && item === arr[index + 1]) count ++});
    return count;
}