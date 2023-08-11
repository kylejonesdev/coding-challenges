/**
 * Return a boolean indicating whether or not a number is the same backwards and forwards
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let str = x.toString()
    for(let i = 0; i < str.length / 2; i++) {
        let left = str.slice(i, i + 1) 
        let right = str.slice(-i - 1).slice(0, 1)
        if(left !== right) return false;
    }
    return true;
};