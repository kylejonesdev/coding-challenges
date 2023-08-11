//https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

//Calculate the base 10 sum of an array representing a binary number

const binaryArrayToNumber = arr => {
    let multiplier = 1;
    let sum = 0;
    arr.reverse().forEach(item => {
      sum += item * multiplier;
      multiplier *= 2;
    });
    return sum;
};