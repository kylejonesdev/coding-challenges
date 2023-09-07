//Given a string, return a string with words in reverse order and capitalization reversed. 
function stringTransformer(str) {
    //Split string to array, delimited by spaces
    let arr = str.split(' ')
    //Reverse array order
    let revArr = [...arr].reverse();
    //Map on each array item
    let res = revArr.map(item => {
      //hold modified chars until whole item has been looped over
      let temp = '';
      //Check if each char is a letter
      for(let i = 0; i < item.length; i++){
        //Reverse case if a letter
        if(item[i] !== ' ') {
          item[i].toUpperCase() === item[i] ?  temp += item[i].toLowerCase() : temp += item[i].toUpperCase();
        }
      }
      return temp;
    })
    //Join the array items with " " as glue
    return res.join(' ');
}

//Inputs
//String of alpha chars and spaces
//Could be leading and trailing spaces
//No symbols, numbers, nulls, etc.

//Outputs
//String where
//capitalization is reversed
//word order is reversed
//number of spaces is maintained

//Tests
// console.log(stringTransformer("Hi there"),"THERE hI");
// console.log(stringTransformer(" aBc"), "AbC ");