//https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

//Order an array by value. Return empty array if no input.

function solution(nums){
    return nums === null ? [] : nums.sort((a, b) => a - b)
}