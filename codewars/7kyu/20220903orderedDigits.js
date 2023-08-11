//Determine if all digits in a number are in ascending order.

function tidyNumber(n){
    let prev = 0;
    for(let num of n.toString()) {
      if(prev > Number(num)) return false;
      prev = num;
    }
    return true;
}