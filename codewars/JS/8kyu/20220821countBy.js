//Count by multiples of x for n times

function countBy(x, n) {
    let z = [];
    for(let i = 1; i <= n; i++) {
      z.push(x * i);
    }
    return z;
}