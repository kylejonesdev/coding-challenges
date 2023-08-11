//Find if your score is better than the class average
function betterThanAverage(classPoints, yourPoints) {
    let sum = classPoints.reduce((acc, item) => acc + item, 0);
    let avg = sum / classPoints.length;
    return yourPoints > avg ? true : false;
}