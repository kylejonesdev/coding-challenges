//Find the location of each vowel in a word

function vowelIndices(word){
    let wordArr = word.toLowerCase().split('');
    let resultsArr = [];
    for(let i = 0; i < wordArr.length; i++) {
      if (wordArr[i] === 'a' || wordArr[i] === 'e' || wordArr[i] === 'i' || wordArr[i] === 'o' || wordArr[i] === 'u' || wordArr[i] === 'y' ) {
        resultsArr.push(i + 1);
      }
    }
    return resultsArr;
}