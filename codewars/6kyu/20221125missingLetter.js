function findMissingLetter(array) {
  let prior = array[0].charCodeAt(0);
  for(let i = 0; i < array.length; i++) {
    let curr = array[i].charCodeAt(0);
    if(curr === prior + 2) {
      return String.fromCharCode(curr - 1);
    } else {
      prior = curr;
    }
  }
  return 0;
}