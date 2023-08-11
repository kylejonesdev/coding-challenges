//Given an array of integers, find the greatest possible difference between two values in the array.
function maxDiff(list) {
    let smallest = list[0];
    let largest = list[0];
    if(list.length <= 1) return 0;
    list.forEach(item => {
      if(item < smallest) smallest = item;
      if(item > largest) largest = item;
    })
    return largest - smallest;
};