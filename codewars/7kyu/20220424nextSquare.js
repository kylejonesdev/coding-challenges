//https://www.codewars.com/kata/56269eb78ad2e4ced1000013/javascript

//Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

function findNextSquare(sq) {
    //Take the square root, round it down, then square it and see if it equals the starting number
    //If yes, add one to the square root, square that, and return it, else return -1
    return Math.pow((Math.floor(Math.sqrt(sq))),2) === sq ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
  }