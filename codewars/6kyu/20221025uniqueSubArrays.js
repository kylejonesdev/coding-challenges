//Return number of unique arrays created using one element from each sub-array
function solve(arr) {
    //Tally of potential unique arrays
    let tally = 1;
    //Find each subarray
    arr.forEach(subarr => {
      //Create an empty set for the given subarray
      let mySet = new Set();
      //For each item in the subarray
      subarr.forEach(item => {
        //Add it to the subarray's set (thus eliminating duplicates)
        mySet.add(item);
      })
      //Once iteration on subarray items is done, multiply that value by the tally
      tally *= mySet.size;
    })
    //Return the product of all unique subarray items multiplied together
    return tally;
  };
    
  //Array of arrays
  //Sub-arrays are only numbers
  //Top level and sub-arrays are valid arrays
  //No sub-arrays are empty
  
  //Return is a real number