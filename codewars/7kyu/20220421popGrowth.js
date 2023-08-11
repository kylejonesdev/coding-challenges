//https://www.codewars.com/kata/563b662a59afc2b5120000c6/javascript

/*
Simulate population growth and find how many years it takes to reach a target population.
p0 = starting population
percent = percent growth (whole number)
aug = immigration
p = target population
*/

function nbYear(p0, percent, aug, p) {
    let currentPopulation = p0;
    let iterations = 0;
    while(currentPopulation < p) {
      currentPopulation += Math.floor(currentPopulation * percent * .01 + aug);
      iterations++
    }
    return iterations;
  }