//Repeats each digit the number of times equal to its value
function explode(s) {
    let res = '';
    for(let digit of s) res += digit.repeat(digit);
    return res;
}