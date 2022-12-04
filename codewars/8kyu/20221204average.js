function findAverage(array) {
    if(!array.length) return 0;
    return array.reduce((acc, item) => acc + item, 0) / array.length;
}