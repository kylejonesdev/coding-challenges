//Return a greeting with a properly capitalized name given a string with random casing.

var greet = function(name) {
    let arr = [...name].map((item, index) => index === 0 ? item.toUpperCase() : item.toLowerCase())
    return `Hello ${arr.join('')}!`
};