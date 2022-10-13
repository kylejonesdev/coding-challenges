/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    //Create an empty map
    let map = new Map();
    
    //Select each item from the array
    for(let i = 0; i < nums.length; i ++) {
        //Search the map and see if it already contains the difference between the target and the selected item
        if(map.has(target - nums[i])) {
            //If yes, return the value in the map at the key corresponding to the selected item
            return [i, map.get(target - nums[i])]
        }
        //If not, add the selected item to the map as a key, with the corresponding value being its index
        map.set(nums[i], i)
    }
};

//Find two numbers from an array that add up to a target and return their indicies
//Nums will contain integers
//Target will contain an integer
//There will always be a valid solution
//There will always be only two numbers in the array that add up to the result
//Each position in the array will only be used one time

//Return positions of two numbers from provided array
//Order is not relevant
//Returned solution will be only two numbers

//Tests
// console.log(twoSum([1, 1, 2], 2), [0, 1]);
// console.log(twoSum([1, -1, 0], 0), [0, 1]);
// console.log(twoSum([0, 0], 0), [0, 1]);