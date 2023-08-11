//https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

//Square each number from 0 to n, then find how many times the digit d appears in that list

function nbDig(n, d) {
    let count = 0;  
    for(let i = 0; i <= n; i++) {
      let squared = (i**2).toString();
      for(let j = 0; j < squared.length; j++) {
        if (squared.charAt(j) == d) count++;
      }
    }
    return count;
}