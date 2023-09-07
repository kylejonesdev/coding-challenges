//Change negatives to positives and positives to negatives
//For some reason the problem tries to assign zero a positive and negative value
function invert(array) {
    return array.map(item => {
      return -item;
    });
}