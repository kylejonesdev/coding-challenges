//Return all the possible ways in which a given array could be divided into two items
function partlist(arr) {
    let result = [];
    for(let i = 0; i < arr.length - 1; i++) {
        let subArr1 = arr.slice(0, i + 1).join(' ');
        let subArr2 = arr.slice(i + 1).join(' ');
        result.push([subArr1, subArr2]);
      }
    return result;
}