//https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

//Take a string of any char, symbol, or number combo and return only the reversed chars.
function reverseLetter(str) {
    let rev = [...str].reverse();
    return rev.map(item => item.toUpperCase() !== item ? item : null).join('');
}