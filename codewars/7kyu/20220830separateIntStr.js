//Take an array of ints and strings and return the result of the difference of the ints and the strings.

function divCon(x){
    let ints = 0;
    let strs = 0;
    x.forEach(item => typeof item === 'number' ? ints += item : strs += parseInt(item));
    return ints - strs;
}