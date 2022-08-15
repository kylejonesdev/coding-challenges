//Determine whether the sum of the digits in the first half of a number equals the sum of the digits in the second half.
//Ignore the number(s) in at the mid-point

function balancedNum(number)
{
  let str = number.toString();
  let halfLength = Math.ceil(str.length / 2)  - 1;
  let front = str.slice(0, halfLength);
  let back = str.slice(-halfLength)
  let sumHalf = (half) => {
    return [...half].reduce((acc,item) => {
      return acc += parseInt(item);
    }, 0)
  }
  return (halfLength === 0 || sumHalf(front) === sumHalf(back)) ? "Balanced" : "Not Balanced";
}