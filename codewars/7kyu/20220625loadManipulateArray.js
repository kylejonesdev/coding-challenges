//Accepts 8 strings as parameters
//Square each one, sum them all, find the square root, divide by two, then round down

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let arr = [];
    for(let i = 1; i <= 8; i++) {
      arr.push(eval(`age${i}`));
    }
    return Math.floor(Math.sqrt(arr.map(item => item * item).reduce((acc, item) => acc += item, 0)) / 2);
}