//Create a function that removes any 9 bordered by 7's.

function sevenAte9(str) {
    while(str.includes("797")) str = str.replace("797","77");
    return str;
}