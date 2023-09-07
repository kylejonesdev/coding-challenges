//Given an array of items, remove "rotten" from any items on which it appears

function removeRotten(bagOfFruits){
    return bagOfFruits ? bagOfFruits.map(item => item.replace("rotten", "").toLowerCase()) : [];
}