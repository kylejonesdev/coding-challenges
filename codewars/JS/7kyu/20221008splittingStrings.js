//Add spaces between portions of a string of a given size
var splitInParts = function(s, partLength){
    let start = 0;
    let res = '';
    while(start < s.length) {
      res += s.substring(start, start + partLength) + ' ';
      start += partLength;
    }
    return res.trim();
}