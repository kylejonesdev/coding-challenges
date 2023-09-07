var findDigit = function(num, nth){
    let str = Math.abs(num).toString();
    let char = str.charAt(str.length - nth);
    if(str.length < nth) return 0
    else if(nth <= 0) return -1
    else return parseInt(char);
}