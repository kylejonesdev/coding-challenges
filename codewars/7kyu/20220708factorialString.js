//Return a string showing the numbers added together to get the factorial of a given number.

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      let sum = 0;
      let str = '';
      if(count < 0) {
        str = `${count}<0`;
        return str;
      } else if (count === 0) {
        str = `0=0`;
        return str;
      } else {
        str = 0;
        for(let i = 1; i <= count; i++) {
          sum += i;
          str += `+${i}`        
        }
      }
      return `${str} = ${sum}`;
    };
  
    return SequenceSum;
  
})();