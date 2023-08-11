//Given an array of numbers and a mixed array of all but one of the numbers from the first array, return the missing number
function findDeletedNumber(arr, mixArr) {
    let res1 = arr.reduce((acc, item) => acc += item, 0);
    let res2 = mixArr.reduce((acc, item) => acc += item, 0);
    return res1 - res2;
}