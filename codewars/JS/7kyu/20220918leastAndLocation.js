//Return either the lowest number or the index of the lowest number in an array
function min(arr, toReturn) {
    let least = [...arr].sort((a, b) => a - b)[0]
    let location = arr.indexOf(least);
    return toReturn == 'value' ? least : location;
}