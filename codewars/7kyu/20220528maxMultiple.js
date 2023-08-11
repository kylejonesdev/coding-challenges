//https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript

//Find the greatest multiple of 'divisor' that is less than 'bound'

function maxMultiple(divisor, bound){
    return Math.floor(bound / divisor) * divisor;
}