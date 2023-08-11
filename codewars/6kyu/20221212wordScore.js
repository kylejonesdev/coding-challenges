//A word score is the sum of the place of each of its letters in the alphabet
//Return the word with the highest score in a string
function high(x){
  const arr = x.split(' ')
  let highScore = 0;
  let res = '';
  for(let item of arr) {
    let sum = 0;
    for(let l of item) {
      sum += l.charCodeAt(0) - 96 //96 is charCode of 'a' + 1
    }
    if(sum > highScore){ 
      highScore = sum;
      res = item;
    }
  }
  return res;
}