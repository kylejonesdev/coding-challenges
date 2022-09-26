//A function that takes in an array, and returns an array where each element is the product of all items in the starting array except the item at the current index.
function productArray(numbers){
    let total = numbers.reduce((acc,item) => acc * item, 1);
    let res = [];
    for(let i = 0; i < numbers.length; i++) {
      res.push(total / numbers[i]);
    }
    return res;
}