//Return the sum of the three highest numbers present in an array. Each number can only be used once.

function maxTriSum(numbers){
    const arrSet = new Set(numbers);
    return [...arrSet].sort((a, b) => b - a).slice(0,3).reduce((acc, item) => acc += item, 0);
}