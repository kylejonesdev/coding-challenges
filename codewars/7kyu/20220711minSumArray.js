//Return the minimum sum obtained by multiplying each value in an array by another value from the same array, then summing the results.
function minSum(arr) {
    const sorted = arr.sort((a, b) => a - b)
    let linedUp = [];
    for(let i = 0; i < sorted.length / 2; i++) {
      linedUp.push(sorted[i] * sorted[sorted.length - 1 - i]);
    }
    return linedUp.reduce((acc, item) => acc + item, 0);
}