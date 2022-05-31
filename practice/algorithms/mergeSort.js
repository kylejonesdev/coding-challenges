//Practice implementation of a merge sort algorithm in a coding interview style

const arr = [1, 5, 4, 7, 3, 2];

//3) For each constituent array, instantiate one pointer at index zero for each array
function merge(arr1, arr2) {
    //4) Instantiate an empty temporary array.
    let resultingArr = [];
    //7) If both arrays have a length greater than zero, run steps five and six again. 
    while(arr1.length && arr2.length) {
        //5) Compare the two items at the pointers.
        if(arr1[0] <= arr2[0]) {
            //6) Remove the lowest number from the original array and push it on to the temp array
            resultingArr.push(arr1.shift());
        } else {
            resultingArr.push(arr2.shift());
        }
    }
    //If not push all arrays together
    let result =  [...resultingArr, ...arr1, ...arr2];
    console.log(result);
    //8) Return the temp array.
    return result;
}

//1) Half the given array into two arrays
function mergeSort(arr) {
    if( arr.length < 2) { //base case
        return arr;
    }
    let left = arr.splice(0, Math.floor(arr.length / 2)); //left array equals 0 to mid point. If midpoint falls between two indecies, take the lower index
    //2) Perform step 1) until the resulting arrays have lengths of either 1 or zero
    return merge(mergeSort(left), mergeSort(arr));
}

console.log(mergeSort(arr));