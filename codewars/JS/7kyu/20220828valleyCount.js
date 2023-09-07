//Evaluate a string representing changes in elevation. Count the number of times a valley is both entered and exited.

function countingValleys(s) {
    let elevation = 0;
    let valleyCount = 0;
    let inValley = false;
    for(let letter of s) {
      if(elevation < 0) {
        inValley = true;
      }
      switch(letter) {
          case "U":
            elevation ++;
            break;
          case "D":
            elevation --;
            break;
      }
      if(elevation === 0 && inValley) {
        valleyCount++;
        inValley = false;
      }
    }
    return valleyCount;
}