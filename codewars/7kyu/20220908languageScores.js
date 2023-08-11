//Given an object of languages and scores, return an an arry of all language scores over 60 ranked highest to lowest.
function myLanguages(results) {
    return Object.entries(results)
    .filter(item => item[1] >= 60)
    .sort((a,b) => b[1] - a[1])
    .map(item => item[0]);
}