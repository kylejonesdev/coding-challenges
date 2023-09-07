//https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

//Return the sum of the absolute value of a numbers individual digits

function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((sum, item) => sum += Number(item), 0);
}