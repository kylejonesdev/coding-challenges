//Find whether or not an array contains an object with the property 'language: Ruby'

function isRubyComing(list) {  
    let result = false;
    for(let i = 0; i < list.length; i++) {
      if (list[i]['language'] === 'Ruby') {
        result = true;
        break;
      }
    }
    return result;
}