//Given an array of integers, return the integer where its negative match is not inlcuded.
function solve(arr){
    for(let num of arr) {
      if(!arr.includes(num / -1)) return num;
    }
};