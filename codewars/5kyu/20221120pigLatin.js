//Convert a string to Pig Latin
function pigIt(str){
    let piggedWords = str.split(' ').map(item => {
      if(item.toLowerCase() === item.toUpperCase()) return item;
      let first = item.slice(0, 1);
      let remainder = item.slice(1);    
      return remainder + first + "ay";
    })
    return piggedWords.join(' ');
}