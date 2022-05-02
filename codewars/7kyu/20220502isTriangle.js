//https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

//Receive three integers representing line length as arguments and return true if such lines could make a triange.

function isTriangle(a,b,c)
{
  let arr = [a, b, c].sort((a, b) => a - b);
  return (arr[0] + arr[1] > arr[2]) ? true : false;
}