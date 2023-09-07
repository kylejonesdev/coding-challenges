//Sort string of words according to number somewhere in each word

function order(words){
    //Create a new variable to hold the return
    let resArray = [];
    //Spliting string into words
    let arr = words.split(" ");
    //Sort each word into appropriate order
    arr.sort((a, b) => {
      let isoA = 0;
      let isoB = 0;
      for(let char of a){
        if(char.toLowerCase() === char.toUpperCase()){
          isoA = char;
        } 
      }
      for(let char of b){
        if(char.toLowerCase() === char.toUpperCase()) isoB = char;
      }
      return isoA > isoB ? 1 : -1;
    })
    //Concatenate items back to string in correct order
    //Return string
    return arr.join(' ');
  }
  //Sort string words into correct order
  
  //String of space delimited words, each with one number
  //Empty string is possible
  //Numbers will always start at 1 and continue sequentially, though words may be out of order
  //Each word will only have one number, at least one letter
  //Max length of string is 9 words
  
  //Return words in order according to number in each word
  //No punctuation required on return
  
  // console.log(order("b2 a1 c3"), "a1 b2 c3");
  // console.log(order("test4 This1 a3 is2"), "This1 is2 a3 test4");
  // console.log(order("4test Th1is 3a i2s"), "Th1is i2s 3a 4test");