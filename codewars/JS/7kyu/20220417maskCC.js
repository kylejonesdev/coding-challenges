//https://www.codewars.com/kata/5412509bd436bd33920011bc/javascript

// return masked string with last four numbers showing
function maskify(cc) {
    return cc.split('').map((item, index) => index < cc.length - 4 ? '#' : item).join('');
}