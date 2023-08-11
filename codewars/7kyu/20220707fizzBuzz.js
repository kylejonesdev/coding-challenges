function fizzbuzz(n) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
      arr.push(i);    
    }
    return arr.map(item => {
      let result = '';
      if(item % 3 === 0) result += 'Fizz'
      if(item % 5 === 0) result += 'Buzz'
      return result === '' ? item : result;
    })
}
  