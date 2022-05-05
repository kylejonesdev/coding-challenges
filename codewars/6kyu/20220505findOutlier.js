//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript

//Take an array of all evens and one odd, or all odds and one even. Return the outlier.

function findOutlier(integers){
    let evens = [];
    let odds = [];
    integers.forEach(item => (item % 2 === 0) ? evens.push(item) : odds.push(item));
    return (evens.length > odds.length) ? odds[0] : evens[0];
  }