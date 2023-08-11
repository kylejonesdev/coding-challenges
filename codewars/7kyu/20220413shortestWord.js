//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

//Simple, given a string of words, return the length of the shortest word(s).

function findShort(s){
    let shortest = s.length;
    s.split(' ').forEach(item => {
      if(item.length < shortest) shortest = item.length;
    })
    return shortest;
  }