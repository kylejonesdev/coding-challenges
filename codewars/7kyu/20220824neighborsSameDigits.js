//Find the lowest int n where the results of k * n and k + 1 * n have the same digits

function findLowestInt(k) {
    let k2 = k + 1;
    let res = false;
    let n = 1;
    while(res === false) {
        let kn1 = k * n;
        let kn2 = k2 * n;
        kn1.toString().split('').sort().join('') === kn2.toString().split('').sort().join('') ? res = true : n++;
    }
    return n;
}