function noSpace(x){
    let result = '';
    for(let i = 0; i < x.length; i++) {
        let spF = x[i].replace(' ', '');
        result += spF;
    }
    return result;
  }