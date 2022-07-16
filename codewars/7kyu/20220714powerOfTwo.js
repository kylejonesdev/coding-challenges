//Determine whether a given number is a power of two.

function isPowerOfTwo(n){
    let result = 0;
    for(let i = 0; i < n; i++) {
      result = Math.pow(2,i);
      if(result === n) return true;
    }
    return false;
}