//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

//Determine the sum of consecutive odd numbers assuming "n" is the number of odd numbers in a row, and odd numbers continue counting up in each new row.
/*
1
3 5
7 9 11
*/

function rowSumOddNumbers(n) {
    let row = 1;
    let sum = 0;
    let num = -1;
    for(let i = 0; i < n; i++) {
      sum = 0;
      for(let j = 1; j <= row; j++) {
        num += 2;
        sum += num;
      }
      row++;
    }
    return sum;
  }