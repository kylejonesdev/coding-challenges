//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

//Combine two strings and return one of each character present, sorted alphabetically.
function longest(s1, s2) {
    let result = new Set(s1 + s2);
    let final = [...result];
    return final.sort().join('');
  }