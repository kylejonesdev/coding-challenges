//Return the first letter from each word in a string
function makeString(s){
    return s.split(' ').reduce((acc, item) => acc + item[0], '');
}