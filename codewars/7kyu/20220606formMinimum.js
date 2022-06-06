// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

//Create the minimum number using each number in a given object only once.

function minValue(values){
    let valuesSet = new Set(values);
    return Number([...valuesSet].sort().join(''));
}