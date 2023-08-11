//https://www.codewars.com/kata/51675d17e0c1bed195000001/train/javascript

//Return the largest five digit number that can be made from a string of digits

function solution(digits){
    let arr = [...digits];
    let greatest = arr.slice(0, 5);
    for (let i = 1; i < arr.length - 4; i++) {
      let currentFive = arr.slice(i, i + 5);
      if(greatest < currentFive) greatest = currentFive;
    }
    return parseInt(greatest.join('')); 
}

  
  
  
  
  
  