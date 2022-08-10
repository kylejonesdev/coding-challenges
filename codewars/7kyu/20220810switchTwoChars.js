//Receive a string of 'a', 'b', and 'c' as an argument. Switch 'a' and 'b', but do not make any changes to 'c'.

function switcheroo(x) {
    return [...x].map(letter => {
      switch(letter) {
        case 'a':
          return 'b';
        case 'b':
          return 'a';
        default: 
          return 'c';
      }
    }).join('');
}