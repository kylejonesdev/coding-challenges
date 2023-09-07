//https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript

// return the two oldest/oldest ages within the array of ages passed in.

function twoOldestAges(ages){
    return ages.sort((a, b) => a - b).splice(-2);
}