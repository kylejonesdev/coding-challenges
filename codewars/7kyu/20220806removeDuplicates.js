//Remove duplicates from an array, leaving the right-most value

function solve(arr) {
    let numSet = new Set();
    arr.reverse().forEach(item => numSet.add(item));
    return [...numSet].reverse();
}