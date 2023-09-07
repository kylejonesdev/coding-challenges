//https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

//Sum the elements of an array and return whether the result is odd or even.

function oddOrEven(array) {
    let result = array.reduce((acc, item) => acc + item, 0);
    return (result % 2 === 0) ? 'even' : 'odd';
  }