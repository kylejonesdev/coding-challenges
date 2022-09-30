//A function that prints each successive number(N) that many (N) times.

function pattern(n){
    let output="";
    for(let i = 1; i <= n; i++) {
        if(i > 1) output += '\n';
        output += i.toString().repeat(i);
    }
    return output;
}