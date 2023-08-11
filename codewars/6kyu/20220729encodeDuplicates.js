//Return a string where all chars duplicated in the string are ')' and unique chars are '('

function duplicateEncode(word){
    let result = '';
    let lWord = word.toLowerCase();
    for(let letter of lWord) {
      let len = lWord.split(letter).length;
      if(len > 2){
        result += ')'
      } else {
        result += '(';
      }
    }
    return result;
}