//Capitalize the first letter of every word in a string
String.prototype.toJadenCase = function () {
    let wordArr = this.split(" ");
    return wordArr.map(word => word.replace(word[0], word[0].toUpperCase())).join(" ");
};