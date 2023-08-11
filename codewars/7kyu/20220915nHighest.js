//A function that takes an array of numbers as an argument and returns the result of the n highest numbers multiplied together.

function maxProduct(numbers, size){
    return numbers.sort((a, b) => b - a).slice(0, size).reduce((acc, item) => acc *= item, 1);
}