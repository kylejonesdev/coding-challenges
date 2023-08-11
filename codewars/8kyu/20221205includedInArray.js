//Is a given value x included in an array a?
function check(a, x) {
    let res = a.filter(item => item === x);
    return res.length !== 0;
}