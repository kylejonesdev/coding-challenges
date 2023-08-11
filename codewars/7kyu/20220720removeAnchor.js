//Return the provided URL after stripping the anchor

function removeUrlAnchor(url){
    let result = '';
    for(let char of url) {
      if(char === '#') break;
      result += char;
    }
    return result;
}