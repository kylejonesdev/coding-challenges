//Given a number of floors, return an array of asterisks that looks like a pyramid
function towerBuilder(nFloors) {
    const width = nFloors * 2 - 1;
    let spaces = (width - 1) / 2;
    let res = [];
    for(let i = 1; i <= nFloors; i++) {
      res.push(" ".repeat(spaces) + "*".repeat(i * 2 - 1) + " ".repeat(spaces))
      spaces --;
    }
    return res;
}