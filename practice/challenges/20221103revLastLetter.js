// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
// All inputs will be valid.

const last = (x => {
    let arr = x.split(' ');
    arr.sort((a, b) => {
        let arrA = a.split("");
        let arrB = b.split("");
        console.log(arrA[arrA.length - 1])
        console.log(arrB[arrB.length - 1])
        return arrA[arrA.length - 1] >= arrB[arrB.length - 1] ? 1 : -1;
    })
    return arr;
})

console.log(last('man i need a taxi up to ubud'), `['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']`)
console.log(last('what time are we climbing up the volcano'), `['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']`)
console.log(last('take me to semynak'), `['take', 'me', 'semynak', 'to']`)