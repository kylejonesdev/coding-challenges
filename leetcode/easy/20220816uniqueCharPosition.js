/**
 * @param {string} s
 * @return {number}
 * Return the index of the first unique character in a provided string
 */
 var firstUniqChar = function(s) {
    let arr = [];
    //Create an array where the index equals the position in the alphabet and the value equals the number of times said char appears
    for(let item of s) {
        let loc = item.charCodeAt() - 'a'.charCodeAt();
        !arr[loc] ? arr[loc] = 1 : arr[loc] += 1;
    }
    //Create a new array of only unique chars in order they appear in the provided string
    let res = [...s].filter(item => {
        return arr[item.charCodeAt() - 'a'.charCodeAt()] < 2
    })
    //Find the index of the first unique char
    return res[0] ? s.indexOf(res[0]) : -1;
};