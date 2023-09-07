//https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

//Return the sum of an array of numbers where each number is first squared.
function squareSum(numbers){
    return numbers.reduce((acc,item) => acc + item * item, 0);
}