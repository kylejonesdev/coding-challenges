//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed.

function spinWords(string){
    let arr = string.split(' ').map(item => {
      if (item.length > 4) {
        let newItem = '';
        for(let i = item.length; i >= 0; i--){
          newItem += item.charAt(i);
        }
        return newItem;
      } else {
        return item;    
      }
    });
    return arr.join(' ');  
}