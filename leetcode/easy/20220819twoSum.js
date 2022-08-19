/**
 * Create a function that returns the indices of the only two values in an array of numbers whose sum equals a given target
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let differenceObj = {};
    for(let num of nums) {
        differenceObj[num] = target - num;
    }
    let count = 0;
    let solution = 0;
    while(count < nums.length) {
        solution = nums.indexOf(differenceObj[nums[count]]);
        if(solution !== -1 && solution !== count) break;
        else{
            count++;
        } 
    }
    return ([count, solution]);
};