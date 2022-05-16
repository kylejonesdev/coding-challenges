//https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript

//Create a function that returns the year in which a principal investment reaches a desired total

function calculateYears(principal, interest, tax, desired) {
    let year = 0;
    while (principal < desired) {
      principal += (principal * interest) * (1 - tax);
      year++;
    }
    return year;
  }