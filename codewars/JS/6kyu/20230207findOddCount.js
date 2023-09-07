//Given an array of numbers, find which number occurs an odd number of times
function findOdd(A) {
    let countsObj = {}
    A.forEach(item => {
      if(!Object.keys(countsObj).includes(item.toString())) {
        countsObj[item] = 0;
      }
      countsObj[item] = (countsObj[item] + 1);
    })
    for(const [key, value] of Object.entries(countsObj)) {
      if (value % 2 === 1) return Number(key);
    }
    return 0;
}