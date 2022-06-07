//https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

//Determine whether a string has more upper or lower case characters, then make the whole string either upper or lower case based on that.

function solve(s){
    let lowerCount = s.split('').reduce((counter, item) => item.toLowerCase() == item ? counter + 1 : counter, 0)
    return lowerCount >= s.length / 2 ? s.toLowerCase() : s.toUpperCase();
}