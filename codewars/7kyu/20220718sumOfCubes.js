//Calculate the sum of cubes from 1 to n

function sumCubes(n){
    let result = 0;
    for(let i = 1; i <= n; i++) {
      result += Math.pow(i, 3);
    }
    return result;
}