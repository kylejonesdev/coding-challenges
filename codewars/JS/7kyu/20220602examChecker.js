//https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

//Create a function that compares two arrays representing the answer key and student answers, then calculates an exam score based on the following: correct answers +4, wrong answers -1, blanks +0

function checkExam(array1, array2) {
    let result = array1.reduce((carry, item, index) => {
      if(array2[index] === '') {
        return carry;
      }
      (item === array2[index]) ? carry += 4 : carry -= 1;
      return carry;
    }, 0);
    return result < 0 ? 0 : result;
}