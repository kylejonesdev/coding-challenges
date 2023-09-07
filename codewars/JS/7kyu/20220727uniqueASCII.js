function hasUniqueChars(str){
  let result = true;  
  let arr = str.split('').map(item => item.charCodeAt(0)).sort((a,b) => a - b);
  arr.forEach((item, index, arr) => {
    if(item === arr[index + 1]) result = false; 
  })
  return result;
}