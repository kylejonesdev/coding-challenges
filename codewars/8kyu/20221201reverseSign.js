//Change negatives to positives and positives to negatives
//For some reason the problem tries to assign zero a positive and negative value
function invert(array) {
    return array.map(item => {
      if(item === 0) return -0;
      if(item === -0) return 0;
      return item - item * 2;
    });
}