

//Create a function that sums a range starting with a "begin" int, adds a "step" int to that number, then adds the resulting number to the sum until it reaches the "end" int.

/*
(2, 2, 2) = (2) = 2
(2, 4, 2) = (2 + 4) = 6
(2, 2, 1) = (2) = 2
(2, 3, 1) = (2 + 3) = 5
(2, 4, 1) = (2 + 3 + 4) = 9
*/

const sequenceSum = (begin, end, step) => {
    let result = 0;
    for(let i = begin; i <= end; i += step) result += i;
    return result;
  };