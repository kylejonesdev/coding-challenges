//https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/train/javascript

//Find the sum of all the multiples of 3 or 5 that are less than or equal to n

function findSum(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
      if(i % 3 === 0 || i % 5 === 0) sum+= i;
    }
    return sum;
  }