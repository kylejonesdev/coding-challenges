//Find the value of a string if each char has a value equal to its place in the alphabet
//a = 1, b = 2, ...

function wordsToMarks(string){
    let sum = 0;
    for(let i = 0; i < string.length; i++) {
      sum += string.charCodeAt(i) - 96;
    }
    return sum;
}