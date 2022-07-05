//Count the number of n's in a string. Determine whether the limit of 15 is exceeded.

function bump(x){
    let bumps = x.split('').reduce((acc, item) => {
      return item === 'n' ? acc += 1 : acc;
    },0);
    return bumps <= 15 ? "Woohoo!" : "Car Dead";
}