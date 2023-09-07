//Does a string contain all 26 letters in the alphabet? T or F
function isPangram(string){
    //Declare variable arr to hold array of results
    let resultsArray = [];
    //Lower case entire string
    string = string.toLowerCase();
    //Loop through string by position
    for(let char of string) {
      //Ensure char is an expected value (letter)
      if('abcdefghijklmnopqrstuvwxyz'.includes(char)) {
        //For each char, determine position in alphabet
        let position = char.charCodeAt(0) - 'a'.charCodeAt(0);
        //Set arr[position] === 1
        resultsArray[position] = 1;
      }
    }
    //Determine if arr.reduce((item, acc) => item + acc, 0) === 26
    const result = resultsArray.reduce((item, acc) => item + acc, 0)
    //Return bool
    return result === 26;
}

//Input is a string. Could contain any values.

//Returns a bool
//Invalid inputs return false

//Tests
// console.log(isPangram('abcdefghijklmnopqrstuvwxyz'), true);
// console.log(isPangram('aabcdefghijklmn1opqrst2uvwx3yz'), true);
// console.log(isPangram('bcdefghijklmnopqrstuvwxyz'), false);
// console.log(isPangram(''), false);
  