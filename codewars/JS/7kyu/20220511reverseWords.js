//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

//Reverse the words in a string.

function reverseWords(str) {
    return str.split(' ').map(item => item.split('').reverse().join('')).join(' ');
}