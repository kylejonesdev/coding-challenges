//Return any number padded to five digits

function solution(value){
    return "Value is " + "0".repeat(5 - value.toString().length) + value;
}