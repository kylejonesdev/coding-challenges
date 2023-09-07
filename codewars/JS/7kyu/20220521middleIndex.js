//https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

//Return the index of the number which would be in the middle if the array were to be sorted.

function gimme (triplet) {
    let orderedArr = [...triplet].sort((a, b) => a - b);
    return (triplet.indexOf(orderedArr[1]));
  }