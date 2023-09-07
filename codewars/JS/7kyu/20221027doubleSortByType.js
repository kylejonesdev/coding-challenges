function dbSort(a){
    let letters = a.filter(item => typeof item === 'string').sort((a, b) => a > b ? 1 : -1);
    let nums = a.filter(item => typeof item === 'number').sort((a, b) => a - b);
    return nums.concat(letters);
}