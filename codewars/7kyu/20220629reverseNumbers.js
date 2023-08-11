//Reverse the digits of a number

function reverseNumber(n) {
    const result = Number(String(n).split('').filter(item => item !== '-').reverse().join(''));
    return n > -1 ? result : result * -1;
}