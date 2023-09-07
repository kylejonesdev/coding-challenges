//Return nth smallest element from an array. Smallest element n=1.

function nthSmallest(arr, pos){
    //Sort the array
    arr.sort((a, b) => a - b);
    //nth element = arr[n - 1]
    return arr[pos - 1];
} 

//Array of integers
//array.length > 2
//Array will only be integers

//Position will be a valid integer

//Return an integer representing the value at the nth smallest position
  
  