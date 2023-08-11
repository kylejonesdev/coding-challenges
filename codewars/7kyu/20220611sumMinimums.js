//Find the lowest number in each row of a 2D array and return the sum

function sumOfMinimums(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      let lowestInRow = arr[i].reduce((acc, item, index) => {
        return acc > item ? acc = item : acc;
      })
      sum += lowestInRow;
    }
    return sum;
}