//Given an array of objects with an age property, return the average age
function getAverageAge(list) {
    return Math.round(list.reduce((acc, item) => acc + item.age, 0) / list.length);
}