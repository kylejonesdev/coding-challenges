var runningSum = function(nums) {
    let limit = nums.length
    let runningSum = 0;
    let newArray = [];
    for (let i = 0; i < limit; i++) {
     let currentNumber = nums.shift();
        runningSum = runningSum + currentNumber;
        newArray.push(runningSum)
        console.log(i, currentNumber);
    }
    return newArray;
};

runningSum([1,2,3,4]);