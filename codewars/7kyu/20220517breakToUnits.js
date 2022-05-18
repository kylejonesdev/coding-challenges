//https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript

//How many times do you break a chocolate bar with dimensions of n and m to get 1 x 1 units?

function breakChocolate(n,m) {
    return Math.max((n * m - 1), 0);
  }