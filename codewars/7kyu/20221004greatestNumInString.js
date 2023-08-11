//Find the largest number in a string containing random chars and numbers
function solve(s){
    let tally = '';
    let longest = 0;
    for (let char of s) {
      if(char.toLowerCase() === char.toUpperCase()) {
        tally += char;
        if(+tally > longest) longest = +tally;      
      } else {
        tally = '';
      }
    }
    return longest;
};