//Given an array of cardinal directions, remove directions that cancel eachother out when they are next to eachother

function dirReduc(arr){
  const opposites = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "WEST": "EAST",
    "EAST": "WEST"
  }
  let p1 = 0;
  while(p1 < arr.length) {
    if(arr[p1] === opposites[arr[p1 + 1]]) { //if pointer equals the opposite of the next element in the array
      arr.splice(p1,2); //remove the two elements starting with the one at the pointer
      p1 = 0; //reset the pointer to the beginning of the adjusted array
      //this is needed because removing two elements may place two elements next to eachother, which are now redundant
    } else {
      p1 ++;
    }
  }
  return arr;
}