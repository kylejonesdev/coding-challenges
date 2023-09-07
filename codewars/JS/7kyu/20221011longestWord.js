//Find the longest word in a space-delimited string.

function longestWord(stringOfWords){
    const arr = stringOfWords.split(" ");
    let longest = "";
    arr.forEach(item => {
      if(item.length >= longest.length) longest = item;
    })
    return longest;
}