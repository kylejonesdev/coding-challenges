//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

//Take an array of arrays, where each sub-array has two values, the people that get on the bus, people that get off the bus. Return the number of people that remain on the bus after the last stop.

var number = function(busStops){
    return busStops.reduce((acc, item) => acc + item[0] - item[1],0)
  }