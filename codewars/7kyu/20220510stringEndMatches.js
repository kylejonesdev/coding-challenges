//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

//See if the ending of the first string provided matches the end of the second string provided.

function solution(str, ending){
    return (str.substring(str.length - ending.length) === ending) ? true : false;
  }