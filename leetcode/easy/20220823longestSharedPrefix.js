/**
 * Find the longest common prefix in an array of strings
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {    
    let res = '';
    let flag = true;
    let testLength = 0;
    let matching = 0;
    if(strs.length === 1) return strs[0];
    while(flag) {
        testLength ++;
        res = strs[0].slice(0, testLength);
        strs.forEach(item => {
            let temp = item.slice(0, testLength);
            if(temp !== res) flag = false;
        })
        if(flag) matching ++;
        if(testLength > strs[0].length) flag = false;
    }
    return res.slice(0, matching);
};