//https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

//Given an array of identical numbers except one, return the number that does not match

function stray(numbers) {
    let result = numbers.sort((a, b) => a - b);
    return (result[0] === result[1]) ? result[result.length - 1] : result[0];
  }