//Given an array of numbers as integers, return floats of those numbers

function toNumberArray(stringarray){
    return stringarray.map(item => parseFloat(item));
}