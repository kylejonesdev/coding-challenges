//https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript

//Create a function that rounds a number to the next highest number divisible by 5

function roundToNext5(n){
    let remainder = n % 5;
    if (remainder > 0) return 5 - remainder + n;
    if (remainder < 0) return n - remainder;
    else return n;
}