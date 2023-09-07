function findMissingNumber(sequence){
    let arr = sequence
    .split(' ')
    .sort((a,b) => a - b)
    let res = 0;
    if(arr[0] === '') return 0;
    if(arr.indexOf('a') !== -1) return 1;
    for(let i = 0; i < arr.length; i++) {
      if(Number(arr[i]) === i + 1) res ++;
      else return ++res;
    }
    return 0;
}