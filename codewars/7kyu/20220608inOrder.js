//https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript

//Determine whether or not all integers in an array are in ascending order

function inAscOrder(arr) {
    let result = arr.reduce((prior, item) => {
      if(prior === false) return false;
      return prior <= item ? prior = item : false;
        }, arr[0]
    )
    return Boolean(result);
}