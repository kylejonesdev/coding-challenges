//Create a function to determine whether or not a number is automorphic.
//An automorphic number is a number where, when it is squared, the result ends with the same digits as the starting number.

function automorphic(n){
    let squared = (n * n).toString();
    let nLength = n.toString().length;
    return n.toString() === squared.slice(-nLength) ? "Automorphic" : "Not!!";
}