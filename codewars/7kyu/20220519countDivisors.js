function getDivisorsCnt(n){
    let count = 1; //starting at 1 represents divisor n, since we're only checking to n / 2
    for(let i = 1; i <= n / 2; i++) {
      if(n % i === 0) count++;
    }
    return count;
  }