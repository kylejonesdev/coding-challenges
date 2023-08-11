/**
 * Write a function that returns the minimum number of unique array items required to cover at least half the total count of values in the array
 * @param {number[]} arr
 * @return {number}
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
 var minSetSize = function(arr) {
    //Find out how many times each unique number occurs
    let numCount = {};
    for(let i of arr) {
        if(!numCount[i]) {
            numCount[i] = 1
        } else if (numCount[i]) {
            numCount[i] ++;
        } else {
            continue;
        }
    }
    //In JS, object keys cannot be sorted, so create an array holding the number of times each unique number occurs
    let occurancesArr = [];
    for(let j in numCount) {
        occurancesArr.push(numCount[j]);
    }
    //Sort the occurances array so that the highest number of occurances are at the beginning
    let sortedOccurancesArr = occurancesArr.sort((a, b) => b - a);
    let tally = 0; //count of array items
    let count = 0;//number of unique array items required to cover half of the number of array items
    //Add up the occurances, starting with the largest, until it equals half the length of the array
    while(tally < arr.length / 2) {
        tally += sortedOccurancesArr[count];
        count ++;
    }
    return count;
        
};