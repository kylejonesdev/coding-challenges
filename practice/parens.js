var isValid = function(s) {
    //Add each opening paren to a count by type of paren
    let arr = s.split('')
    let paren = 0;
    let brack = 0;
    let curly = 0;
    let flag = true;

    let valTable = {
        '(': () => paren += 1,
        '[': () => brack += 1,
        '{': () => curly += 1,
        ')': () => paren -= 1,
        ']': () => brack -= 1,
        '}': () => curly -= 1,
    }
/*     console.log(arr);
    console.log(paren);
    console.log(valTable[arr[0]]());
    console.log(paren); */
    arr.forEach((item) => {
        console.log(item)
        valTable[item]()
        console.log(paren)
        if(paren < 0) flag  = false;
        console.log(flag);
    });
    console.log(`${paren} ${brack} ${curly}`);
    //TODO: Tabulate all three values. Return valid or invalid based on resulting tally and flag.
}

s = '())(';
isValid(s);