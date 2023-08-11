//Sum the triangular numbers up to the nth number

function sumTriangularNumbers(n) {
    let currentTriNum = 0;
    let arr = [];
    for(let i = 1; i <= n; i++) {
      currentTriNum += i;
      arr.push(currentTriNum);
    }
    return arr.reduce((acc, item) => acc + item, 0);
}