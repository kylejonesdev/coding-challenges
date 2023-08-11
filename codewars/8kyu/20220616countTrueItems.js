//Count the number of 'true' items in an array

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(item => item === true).length;
}