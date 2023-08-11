//Multiply the digits of a number together until the result is one digit, then return the number of iterations
function persistence(num) {
    let tally = 0;
    function recursivePersistence(num) {
      while(num.toString().length > 1) {     
         let tempTotal = 1;
         for(let digit of num.toString()){
           tempTotal *= digit;
         }
         tally ++;
         return recursivePersistence(tempTotal);
       }
      }
    recursivePersistence(num);
    return tally;
}