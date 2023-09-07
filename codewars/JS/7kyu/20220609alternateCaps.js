//https://www.codewars.com/kata/59cfc000aeb2844d16000075/javascript

//Return two strings, where each alternates cap and lower case starting on the first and second letter, respectively

function capitalize(s){
    const arr = s.split('');
    let str1 = arr.map((item, index) => {
      return index % 2 === 0 ? item.toUpperCase() : item;
    })
    .join('');
    let str2 = arr.map((item, index) => {
      return index % 2 !== 0 ? item.toUpperCase() : item;
    })
    .join('');
    return [str1, str2];
};