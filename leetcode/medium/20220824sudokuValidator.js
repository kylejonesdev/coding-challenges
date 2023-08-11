/**
 * //Determine if a sudoku puzzle is valid. Submitted as a 2d array of [row][cell] with an overall 9 cells by 9 cells dimension, determine whether or not all of the following contain only unique values: rows, columns, and blocks.
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    let res = true;
    let columns = [];
    for(let i = 0; i < 9; i++) {
        columns[i] = [];
    }
    let boxes = [];
    for(let i = 0; i < 9; i++) {
        boxes[i] = [];
    }
    let position = 0;
    board.forEach((row, index) => {
        row.forEach((item, index) => {
            let columnModifier = Math.floor(position / 9);
            columns[index][columnModifier] = item;
            let boxNumber = Math.floor(position / 27) * 3 + Math.floor(index / 3);
            boxes[boxNumber][(columnModifier * 3 % 9) + (index % 3)] = item;
            position ++;
        });
    });
    function check(feature) {
        feature.forEach(subFeature => {
            subFeature.sort();
            subFeature.forEach((item, index, arr) => {
                if(item === arr[index - 1] && item !== ".") {
                    res = false;
                }
            });
        });
    }
    check(board);
    check(columns);
    check(boxes);
    return res;
};