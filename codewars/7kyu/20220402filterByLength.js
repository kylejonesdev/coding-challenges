//https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

//Return an array of only the strings that are four chars long.

function friend(friends){
    return friends.filter(item => item.length === 4);
  }