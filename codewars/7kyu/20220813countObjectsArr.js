//Return the count of each value in an array

function count(array){
    let countObject = {};
    array.forEach(item => {
      if(!countObject[item]) countObject[item] = 0;
      countObject[item] ++;
    })
    return countObject;
}