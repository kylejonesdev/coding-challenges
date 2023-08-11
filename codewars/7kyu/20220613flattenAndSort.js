//Flatten and sort the provided array

function flattenAndSort(array) {
    if(array.length > 0) {
      return array.reduce((acc, item) => acc.concat(item)).sort((a, b) => a - b);
    } else {
      return [];
    }
}