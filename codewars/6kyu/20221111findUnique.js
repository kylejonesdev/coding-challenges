//Find the unique value in an unsorted array

function findUniq(arr) {
    let repeatingValue = arr[0] === arr[1] ? arr[0] : arr[2]
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] !== repeatingValue) return arr[i];
    }
    return undefined;
}