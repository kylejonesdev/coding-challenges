function stringMerge(string1, string2, letter) {
    //find the position of the "merge letter" in each string
    let str1SplitPosition = string1.indexOf(letter);
    let str2SplitPosition = string2.indexOf(letter);
    //concatenate string1 from beginning to "merge letter" and string2 from "merge letter" to end
    return string1.slice(0,str1SplitPosition) + string2.slice(str2SplitPosition);
}
  //Merge two strings into one at the point a given letter occurs
  
  //Inputs are two strings and "merge letter"
  //Never empty, never invalid
  //Strings always contain "merge letter"
  
  //Return single string