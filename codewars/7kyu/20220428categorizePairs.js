//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

//Create a function that sorts an array of value pairs into one category or the other, depending on whether the first value in the pair is 55 or greater and the second value is greater than 7.

/*
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

function openOrSenior(data){
    return data.map(item => (item[0] > 54 && item[1] > 7) ? 'Senior' : 'Open');
  }