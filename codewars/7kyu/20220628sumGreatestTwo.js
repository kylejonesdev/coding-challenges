//Sum the two largest numbers in an array

function largestPairSum (numbers) {
    return numbers.sort((a, b) => a - b).slice(-2).reduce((acc, item) => acc += item, 0);
}