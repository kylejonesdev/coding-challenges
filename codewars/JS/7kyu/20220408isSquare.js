//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/javascript

//Write a function to determine whether or not a given number is a perfect square
var isSquare = function(n){
    return Math.floor(Math.sqrt(n))**2 === n ? true : false 
  }