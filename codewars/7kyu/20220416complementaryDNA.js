//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

//Return the complimentary character to the provided character: A and T, C and G

function DNAStrand(dna){
    let key = 'ACTG';
    let result = '';
    for(let i = 0; i < dna.length; i++) {
      for(let j = 0; j < 4; j++) {
        if(dna[i] === key[j]) result += key[(j + 2) % 4];
      }
    }
    return result;
}