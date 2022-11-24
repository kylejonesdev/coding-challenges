function countPositivesSumNegatives(input) {
    let count = 0;
    let sum = 0;
    if(!input || input == []) return [];
    input.forEach((item) => {
      return item > 0 ? count++ : sum += item
      });
    return [count, sum]
}