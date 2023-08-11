//Replace vowels with a number representing their position in the string.

function vowel2index(str) {
    let res = ''; 
    for(let i = 1; i <= str.length; i++) {
       if('aeiouAEIOU'.includes(str[i - 1])) {
         res += i
         } else {
           res += str[i - 1];
         }
     }
    return res;
}