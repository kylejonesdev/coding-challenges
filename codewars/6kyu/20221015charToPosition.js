//Return a string with the position number of each char instead of chars. Skip non-letters.
function alphabetPosition(text) {
    let res = '';
    for(let i = 0; i < text.length; i++) {
      const currentCharLowerCase = text[i].toLowerCase();
      if(currentCharLowerCase !== currentCharLowerCase.toUpperCase()) { //if char is a letter
        let charCode = currentCharLowerCase.charCodeAt(0) - 'a'.charCodeAt(0) + 1 //calculate the position of the char
        res += ` ${charCode}`;
      }    
    }
    return res.trim(); //remove extra space at beginning of result
}