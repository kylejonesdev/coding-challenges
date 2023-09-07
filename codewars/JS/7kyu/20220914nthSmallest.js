//Given an array of integers, return the nth smallest item from the array.
function nthSmallest(arr, pos){
    return arr.sort((a, b) => a - b)[pos - 1];
}