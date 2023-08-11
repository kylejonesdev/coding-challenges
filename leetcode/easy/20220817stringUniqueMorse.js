/**
 * @param {string[]} words
 * @return {number}
 * Given an array of words, each consisting of lowercase chars, return how many unique Morse code paterns result
 */
 var uniqueMorseRepresentations = function(words) {
    //Define map of letter/Morse values
    let mapArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let wordSet = new Set();
    //For each word in the parameter array
    let res = words.map(word => {
        let wordInMorse = '';

        //For each letter in the given word
        for(let letter of word) {
            //look up the letter and concatenate it to a return value
            wordInMorse += mapArr[letter.charCodeAt() - 'a'.charCodeAt()];
        }       
        //Return the concatenated array of letters representing the word in Morse Code
        return wordSet.add(wordInMorse);        
    })        
    //Return set.length
    return wordSet.size;
};