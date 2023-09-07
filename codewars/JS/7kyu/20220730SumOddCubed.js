//Determine the sum of all odd numbers to the third power.

function cubeOdd(arr) {
    let result = arr.reduce((acc, item) => {
      return item % 2 !== 0 ? acc += Math.pow(item, 3): acc;
    }, 0);
    return !result && result !== 0 ? undefined : result;
}