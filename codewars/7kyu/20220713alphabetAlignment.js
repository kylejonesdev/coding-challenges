//Return the number of letters in a string that align with that letter's position in the alphabet

function solve(arr){  
    return arr.map(item => {
      let lowerCaseLetterArr = [...item].map(letter => letter.toLowerCase());
      let results = [];
      for (let i = 0; i < lowerCaseLetterArr.length; i++) {
        if(i + 1 === (lowerCaseLetterArr[i].charCodeAt(0) - 96)) results.push(i + 1);
      }
      return results.length;
    });
};