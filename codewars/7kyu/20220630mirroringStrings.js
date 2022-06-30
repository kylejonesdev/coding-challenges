//Function that mirrors block of text horizontally or vertically.

function vertMirror(strng) { 
    const strArr = strng.split('\n');
    let resultArr = [];
    for(let item of strArr) {
      resultArr.push(item.split('').reverse().join(''));
    }
    return resultArr.join('\n');
}
function horMirror(strng) {
    return strng.split('\n').reverse().join('\n');
}
function oper(fct, s) {
    return fct === vertMirror ? vertMirror(s) : horMirror(s);
}