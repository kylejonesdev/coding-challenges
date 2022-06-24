//Receive a string of chars, with some having strength values for each team. Compare the score of each team and return who wins.

function alphabetWar(fight)
{
  let map1 = new Map();
  map1.set('w', -4);
  map1.set('p', -3);
  map1.set('b', -2);
  map1.set('s', -1);
  map1.set('m', 4);
  map1.set('q', 3);
  map1.set('d', 2);
  map1.set('z', 1);
  
  let sum = 0;
  
  for(char of fight) {
    if(map1.has(char)) sum += map1.get(char);
  }
  
  if(sum > 0) {
    return "Right side wins!";
  } else if (sum < 0) {
    return "Left side wins!";
  } else {
    return "Let's fight again!";
  }
}