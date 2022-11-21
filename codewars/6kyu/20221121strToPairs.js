function solution(str){
    //if length = 0, return empty array
    let arr = [];
    if(str.length === 0) return arr;
    //if length odd, add _ to string
    if(str.length % 2 !== 0) str += '_';
    //loop through each char while less than length
    for(let i = 0; i < str.length; i += 2) {
      //add each char and it's neighbor
      arr.push(str[i] + str[i + 1])
      //increment by two
    }
    return arr
}

//String of characters
//No invalid inputs
//Don't need to check for capitals

//Array output
//Each item should be two chars
//If two are not available, one char plus '_'

//Examples
//console.log(solution('a'), "['a_']")
//console.log(solution('ab'), "['ab']")
//console.log(solution('abc'), "['ab', 'c_']")