//Sum alternating items in an array and return the sums

function rowWeights(array){
    let sum1 = 0;
    let sum2 = 0;
    array.forEach((item, index) => index % 2 === 0 ? sum1 += item : sum2 += item);
    return [sum1, sum2];
}