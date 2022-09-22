//Function that counts the values in an array of arrays and returns strings based on result.

function crap(x, bags, cap){
    let remainingCapacity = bags * cap;
    let dog = false;
    for(let i = 0; i < x.length; i ++) {
      x[i].forEach(plot => {
        if(plot === '@') remainingCapacity --;
        if(plot === 'D') dog = true;
      });
    }
    return dog ? 'Dog!!' : remainingCapacity >= 0 ? 'Clean' : 'Cr@p';
}