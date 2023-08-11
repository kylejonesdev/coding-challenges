//Return the index of the first instance of "O" in an arary
function meeting(x){
    for(let i = 0; i < x.length; i++) {
      if(x[i] === 'O') return i;
    }
    return 'None available!';
}