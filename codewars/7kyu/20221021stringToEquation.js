//Convert string with spelled operations ("plus", "minus") to a string of the answer

function calculate(str) {
    while(str.includes('plus')) {
        str = str.replace('plus', '+');
    }
    while(str.includes('minus')) {
        str = str.replace('minus','-');
    }
    return `${eval(str)}`;
}