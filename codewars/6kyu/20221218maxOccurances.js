//Write a function that returns the elements of an array in order until the number of instances of an element exceeds a given maximum
function deleteNth(arr,n){
    let hash = {};
    let res = [];
    arr.forEach(item => {
      if(!hash.hasOwnProperty(item))hash[item] = 0;
      hash[item] += 1;
      if(hash[item] <= n) res.push(item);
    })
    return res;
}