//Given a street of length n, return the house number of the house accross the street from the given address
//Addresses ascend on one side of the street and decrease on the other
//One side of the street is odd numbered houses, the other is even numbered houses.

//Example
//1 6
//3 4
//5 2

function overTheRoad(address, n){
    let housesPassed = Math.ceil(address / 2) - 1;
    return (address % 2 !== 0) ? 2 * n - (housesPassed * 2) : 2 * n - (housesPassed * 2) - 1;
}