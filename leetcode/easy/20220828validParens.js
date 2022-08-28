/**
 * Determine whether a sequence of parentheses, brackets, and braces is valid
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let parMap = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    let parStack = [];
    for(let item of s){
        if(s.length % 2 !== 0) return false;
        if(Object.keys(parMap).includes(item)) parStack.push(item);
        else if(parMap[parStack.pop()] !== item) return false;
    }
    return parStack.length === 0 ? true : false;
};