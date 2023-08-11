const reverseSeq = n => {
    let res = [];
    while(n > 0) {
      res.push(n);
      n -= 1;
    }
    return res;
};