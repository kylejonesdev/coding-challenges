//Count the number of valid smiley emoticons in an array of strings
function countSmileys(arr) {
    return arr.reduce((acc, item) => {
      let points = 0;
      if(item[0] === ";" || item[0] === ":") points++;
      if(item.length === 3) {
        if(item[1] == "~" || item[1] == "-") points++;      
      }
      if(item[item.length - 1] === ")" || item[item.length - 1] === "D") points++;
      return points === item.length ? acc += 1 : acc
    }, 0) 
}