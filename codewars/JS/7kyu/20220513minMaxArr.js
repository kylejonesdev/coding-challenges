//https://www.codewars.com/kata/559590633066759614000063/train/javascript

//Write a function that returns the smallest and largest items in an array.

function minMax(arr){
    let sortedArr = arr.sort((a, b) => a - b);
    return [sortedArr[0], sortedArr[sortedArr.length-1]];
  }