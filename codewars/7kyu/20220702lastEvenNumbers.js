//Return the last [number] even numbers from the given array

function evenNumbers(array, number) {
    return array.filter(item => item % 2 === 0).slice(-(number));
}