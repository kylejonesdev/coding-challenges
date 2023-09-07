//Find the greatest product of any two adjacent numbers from an array.

function adjacentElementsProduct(array) {
    return array.reduce((acc, item, index, arr) => {
      let temp = item * arr[index + 1];
      return temp > acc ? acc = temp : acc;
    },(array[0] * array[1]));
}