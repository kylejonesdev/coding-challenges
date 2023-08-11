//Alphabetize a string according to the last letter in each word.
function last(x){
    return x.split(' ').sort((a, b) => [...a].pop() >= [...b].pop() ? 1 : -1);
}