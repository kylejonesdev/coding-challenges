//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

myParty = ['Pika', 'Bulba', 'Scyther'];

function reverseArr(arr) {
    console.log(arr.reverse());
}
reverseArr(myParty);

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function compareArrays(a, b) {
    let aSquared = a.reduce((acc, item) => acc += item * item, 0);
    let bCubed = b.reduce((acc, item) => acc += item * item * item, 0);

    console.log(aSquared, bCubed);

    return aSquared > bCubed ? true : false;
}
let a = [2, 2, 2];
let b = [2];

console.log(compareArrays(a, b));

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function multOfIndex(arr) {
    return arr.filter((item, index) => item % index === 0);
}

let arr1 = [22, -6, 32, 82, 9, 25];
let arr2 = [68, -1, 1, -7, 10, 10]

console.log(multOfIndex(arr2));

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function allNumbers(arr) {
    return arr.map(item => parseInt(item)).reduce((acc, item) => acc + item, 0);
}
let arr3 = ['1', 2, '3', 4, 5];