//Create a function that returns true if a walk takes ten minutes and returns a user to the starting point
//The function will be supplied with an array of single letter strings representing directions walked for one minute

function isValidWalk(walk) {
    let x = 0;
    let y = 0;
    let dirMap = new Map();
    dirMap.set('n', 1);
    dirMap.set('w', 1);
    dirMap.set('s', -1);
    dirMap.set('e', -1);
    for(let dir of walk) {
      if(dir === 'n' || dir === 's') {
        y += dirMap.get(dir);
      }
      if(dir === 'w' || dir === 'e') {
        x += dirMap.get(dir);
      }
    }
    return x === 0 && y === 0 && walk.length === 10 ? true : false;
}