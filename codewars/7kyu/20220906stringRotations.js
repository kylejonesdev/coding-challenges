//A function to determine whether or not an array contains all rotations (taking the last letter and moving it to the front) of a string.
function containAllRots(strng, arr) {
    for(let i = 0; i < strng.length; i ++) {
      strng = strng.slice(-1) + strng.slice(0,-1);
      if(!arr.includes(strng)) return false;
    }
    return true;
}