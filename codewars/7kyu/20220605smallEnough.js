//https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

//Create a function that returns true if all numbers in an array are lower than a limit

function smallEnough(a, limit) {
    return a.reduce((acc, item) => item > limit ? acc = false : acc, true)
}