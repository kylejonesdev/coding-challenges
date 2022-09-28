//Returns the largest difference between two neighbors in a sorted array
function maxGap (numbers){
    numbers.sort((a, b) => a - b);
    let prior = numbers[0];
    let greatest = 0;
    numbers.forEach(item => {
      const diff = item - prior;
      if(diff > greatest) greatest = diff;
      prior = item;
    })
    return greatest;
}