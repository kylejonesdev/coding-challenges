//https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

//Return an array of all the indicies that contain capital letters

var capitals = function (word) {
	const wordArr = word.split('');
  let capArr = [];
  wordArr.forEach((item, index) => {
    if(item === item.toUpperCase()) capArr.push(index);
  })
  return capArr;
};