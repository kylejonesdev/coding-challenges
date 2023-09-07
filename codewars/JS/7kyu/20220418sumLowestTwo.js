//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

//Sum the lowest two integers in an array
function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort((a, b) => a - b).reduce((acc, item, index) => index < 2 ? acc + item : acc, 0);  
}