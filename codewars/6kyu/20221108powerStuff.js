//Is there an integer k such that: (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

function digPow(n, p){
    let str = String(n);
    let powSum = 0;
    for(let i = 0; i < str.length; i++) {
      powSum += (+str[i]) ** p;
      p += 1;
    }
    return powSum % n === 0 ? powSum / n : -1;
}