//Function takes an array of numbers as strings representing letters in reverse order ( a = '26', z = '1').
//'27', '28', '29' are symbols and spaces
//Return a string of chars
function switcher(x){
    return x.map(item => {
      switch (+item) {
          case 27:
          return '!'
          case 28:
          return '?';
          case 29:
          return ' ';       
      }
      let temp = Math.abs( +item - 26)
      let charCode = 'a'.charCodeAt(0) + temp;
      return String.fromCharCode(charCode);
    }).join('');
}