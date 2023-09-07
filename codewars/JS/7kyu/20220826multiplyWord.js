//Repeat a word in a string the specified number of times
function modifyMultiply (str,loc,num) {
    let item = str.split(' ')[loc];
    let res = item;
    for(let i = 1; i < num; i++) {
      res = res.concat("-", item);
    }
    return res;
}