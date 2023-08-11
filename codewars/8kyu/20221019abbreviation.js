function abbrevName(name){
    let arr = name.split(" ");
    let res = "";
    res = arr[0][0].toUpperCase() + "." + arr[1][0].toUpperCase();
    return res;
}