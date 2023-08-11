//https://www.codewars.com/kata/5390bac347d09b7da40006f6

//Capitalize the first letter of every word in a string

String.prototype.toJadenCase = function () {
    let arrFromString = this.split(' ');
    let newArr = arrFromString.map(item => item[0].toUpperCase() + item.slice(1));
    return newArr.join(' ');
  };