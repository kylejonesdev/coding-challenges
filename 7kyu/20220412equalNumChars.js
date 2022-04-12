function XO(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
      if(str[i].toLowerCase() === 'x') count++;
      if(str[i].toLowerCase() === 'o') count--;
    }
    return (count === 0) ? true : false;
}

