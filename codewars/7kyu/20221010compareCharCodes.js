//Compare two strings of characters' ASCII values and determine whether they are equal
//Treat all chars as uppercase
//Any invalid string is has a value of zero

function compare(s1, s2) {
    const checkString = (str) => {
      if(str === null) return 0;
      let res = 0;
      for(let char of str) {
        if((char.charCodeAt(0) < 65 || char.charCodeAt(0) > 90) && (char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122)) return 0;
        char = char.toUpperCase();
        res += char.charCodeAt(0);
      }
      return res;
    }
    return checkString(s1) === checkString(s2);
}