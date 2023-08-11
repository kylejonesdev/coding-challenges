const orderedCount = function (text) {
    let arr = [...text];
    let result = []
    let setty = new Set;
    arr.forEach(item => setty.add(item))
    for(let item of setty) {
      let count = arr.filter((letter) => letter === item).length;
      result.push([item, count]);
    }
    return result;
}