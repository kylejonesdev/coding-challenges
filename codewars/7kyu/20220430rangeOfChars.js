//https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

//Find whether a string of chars a - z contains letters n - z.
//Count the number of n - z and return it over the total number of chars.

function printerError(s) {
    let arr = (s.split('').sort());
    let errorCount = 0;
    arr.forEach((item) => {
      if(item.charCodeAt(0) > 'm'.charCodeAt(0)) errorCount++;
    });
    return (`${errorCount}/${arr.length}`);
  }