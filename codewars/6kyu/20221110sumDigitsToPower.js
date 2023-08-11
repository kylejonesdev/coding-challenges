//Determine if the sum of the digits of a number, with each one raised to an exponent of the length of the number, equals itself

function narcissistic(value) {
    let str = value.toString()
    let res = [...str].reduce((acc, item) => acc + (Number(item)**str.length), 0);
    return res === value;  
}