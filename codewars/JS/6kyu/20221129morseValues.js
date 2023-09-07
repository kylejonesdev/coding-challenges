//Given a string of morse code dots and dashes, return the text value
decodeMorse = function(morseCode){
    // You can use MORSE_CODE[morse] to get letter values
    let morseLetters = morseCode.split(' ');
    let letters = morseLetters.map((item, index) => {
      if(item === '' && morseLetters[index - 1] === '') {
        return '';
      } else if (item === '') {
        return ' ';
      }
      return MORSE_CODE[item];
    })
    return letters.join('').trim();
}