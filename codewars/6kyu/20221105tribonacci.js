//Add the prior three provided numbers to find the next number.
//Return n numbers of the sequence.

function tribonacci(signature,n){
    let arr = []
    for(let i = 0; i < n; i++) {
      if(i < 3){
        arr[i] = signature[i]
      } else {
        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
      }
    }
    return arr;
}