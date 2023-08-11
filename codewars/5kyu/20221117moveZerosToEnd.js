//Given an array, move all zeros to the end without changing the order of the other items

function moveZeros(arr) {
    let tempArr = arr.filter(item => item !== 0);
    let zeros = new Array(arr.length - tempArr.length).fill(0, 0);
    return [...tempArr, ...zeros];
}