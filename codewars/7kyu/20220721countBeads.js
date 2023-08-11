//The pattern of bead colors is: BRRBRRBRRB
//Return the number of red beads if given the number of blue beads.

function countRedBeads(n) {
    return n < 2 ? 0 : (n - 1) * 2;
}