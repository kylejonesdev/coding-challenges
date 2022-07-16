//Determine time needed to boil eggs at 5 minutes per pot with pot max capacity of 8.

function cookingTime(eggs) {
    return Math.ceil(eggs / 8) * 5;
}