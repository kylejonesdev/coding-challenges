//Generate a square measuring n plus-signs on each side

function generateShape(integer){
    let result = '';
    for(let i = 0; i < integer * integer + integer; i ++) {
      if(i === 0) continue;
      if(i % (integer + 1) === 0){
        result += '\n'
      }else{
        result += '+';
      }
    }
    return result;
}