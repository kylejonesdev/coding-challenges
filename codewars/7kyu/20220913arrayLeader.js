//Given an array of numbers, return an array of all numbers which are greater than the sum of all numbers to their right in the original array.

function arrayLeaders(numbers){
    let sum = 0;
    let res = [];
    for(let i = numbers.length - 1; i >= 0; i--) {
      const num = numbers[i]
      if(num > sum) res.unshift(num);
      sum += num;
    }
    return res;
}