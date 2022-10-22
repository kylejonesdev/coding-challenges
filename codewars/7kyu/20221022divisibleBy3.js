function divisibleByThree(str){
    const sum = str.split("").reduce((acc, item) => Number(item) + acc, 0);
    return sum % 3 === 0;
}