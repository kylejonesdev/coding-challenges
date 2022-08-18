/**
 * Write a function that returns the minimum number of unique array items required to cover at least half the total count of values in the array
 * @param {number[]} arr
 * @return {number}
 */
 var minSetSize = function(arr) {
    //Find out how many times each unique number occurs
    let numCount = {};
    for(let i of arr) {
        if(!numCount[i]) {
            numCount[i] = arr.reduce((acc, item) => {
                return item === i ? acc += 1 : acc;
            },0)
        }
    }
    let tally = 0; //count of array items
    let count = 0; //number of unique array items required to cover half of the number of array items    
    while(tally < arr.length / 2) {
        //Find the unique number with the most occurances
        let greatest = 0; //current occurance count        
        for(let num in numCount) {        
            if(numCount[num] > greatest){
                greatest = num; 
            }
        }
        //Add the number of times the chosen number occurs to the tally
        tally += numCount[greatest];
        //Remove the array item with the greatest number of occurances from the numCount so it isn't counted again
        numCount[greatest] = 0;
        //Increase the unique items needed by one
        count ++;
    }
    return count;    
};