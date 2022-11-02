function findMissingNumber(sequence){
    let arr1 = sequence
    .split(' ')
    .filter(item => item.toLowerCase() === item.toUpperCase())
    .sort((a,b) => a - b)
    let arr2 = sequence.split(' ');
    let res = 0;
    for(let i = 0; i < arr2.length; i++) {
      if(arr1[i] === arr2[i] && arr1[i] === i) res ++;
      else return res;
    }  
}