//Return the number with the most digits from an array of numbers

function findLongest(array){
    let result = '';
    for(let num of array) {
      if(String(num).length > result.length) result = String(num);
    }
    return Number(result);
}