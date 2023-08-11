//Determine the minimum number of values in an array that must be summed to reach a target value.

function minimumSteps(numbers, value){
    numbers.sort((a, b) => a - b);
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
      if(sum >= value) return i;
    }
    return null;
}