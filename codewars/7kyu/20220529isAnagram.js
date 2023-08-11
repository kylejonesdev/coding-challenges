//https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

//Determine whether a string is an anagram of another

var isAnagram = function(test, original) {
    let testFormatted = test.toLowerCase().split('').sort().join('');
    let originalFormatted = original.toLowerCase().split('').sort().join('');
    console.log(testFormatted);
    console.log(originalFormatted);
    return testFormatted === originalFormatted ? true : false;
};
  