//Move each character in a string ten letters to the right in the alphabet. If you pass z, keep going from a.

function moveTen(s){
    let res = '';
    for(let letter of s) {
      let letterCode = (letter.charCodeAt(0) + 10);
      if(letterCode > 'z'.charCodeAt(0)) letterCode -= 26;
      res += String.fromCharCode(letterCode);
    }
    return res;
}