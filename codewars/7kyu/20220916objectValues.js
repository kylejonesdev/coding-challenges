//Find the values associated with objects, do math, return a result based on average versus count

function outed(meet, boss){
    let scoreArr = Object.values(meet);
    let happiness = scoreArr.reduce((acc, item) => acc + item, 0) + meet[boss];
    return happiness / scoreArr.length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';  
}