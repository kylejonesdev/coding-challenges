function fakeBin(x){
    let res = '';
    for(let char of x) {
      char < 5 ? res += 0 : res += 1;
    }
    return res;
}