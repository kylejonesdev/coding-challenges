//Concatenate the char codes of each char in a string to create str1.
//Change all the 7's in subtotal1 to 1's, creating str2.
//Find the difference between the sum of the digits in str1 and the sum of the digits in str2.

function calc(x) {
    let charCodeString = '';
    let countOfSevens = 0;
    for(let letter of x) {
      charCodeString += String(letter.charCodeAt(0));
    }
    for(let i = 0; i < charCodeString.length; i++) {
      if(charCodeString.charAt(i) === '7') countOfSevens ++;
    }
    return countOfSevens * 6;
}