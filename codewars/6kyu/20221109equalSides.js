//Determine if there is an index of an array where the sum of the left and right sides are equal.
function findEvenIndex(arr)
{
  let right = arr.reduce((acc, item) => acc + item, 0);
  let left = 0;
  for(let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if(left - right === 0) return i;
    left += arr[i];
  }
  return -1;
}