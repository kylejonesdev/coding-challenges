/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let romanNumeralsMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let prior = '';
    let res = [...s].reduce((acc,item) => {
        acc += romanNumeralsMap[item]
        if(prior < romanNumeralsMap[item]) {
            acc -= (prior * 2);
        }           
        prior = romanNumeralsMap[item];
        return acc;
    },0)
    return res;
};