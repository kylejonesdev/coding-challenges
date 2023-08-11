//Find the longest chain of vowels in a string and return the length
function solve(s) {
    let longest = 0;
    let tally = 0;
    const vowels = 'aeiou'
    for(let letter of s) {
      if(vowels.includes(letter)) {
        tally ++;
        if(tally > longest) longest = tally;
        }
      else tally = 0;
    }
    return longest;
}