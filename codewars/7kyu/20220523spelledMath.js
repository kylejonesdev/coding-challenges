//https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript

//Create a function that performs math when the operation is spelled out in text ('add', 'subtract', etc.)

function arithmetic(a, b, operator){
    let map = {
      'add': '+',
      'subtract': '-',
      'multiply': '*',
      'divide': '/'
    }
    return(eval(a + map[operator] + b));
}