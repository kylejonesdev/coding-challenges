//Determine number of times a material distance must be doubled to meet or exceed a set distance
function foldTo(distance) {
    let initialFoldHeight = .0001;
    let foldTally = 0;
    if(distance < 0) return null; //invalid distance check
    while(initialFoldHeight < distance) {
      initialFoldHeight *= 2;
      foldTally ++;
    }
    return foldTally;
}

//Test
console.log(foldTo(.0002), 1);
console.log(foldTo(.0007), 3);
console.log(foldTo(0), 0);
console.log(foldTo(-1), null);