//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

//Create a function that constructs a string of text that would be used to show likes on social media

function likes(names) {
    let len = names.length;
    let likeString = len < 2 ? 'likes this' : 'like this';
    let nameString = 'no one';
    switch(len) {
      case 0:
        break;
      case 1:
        nameString = names[0];
        break;
      case 2:
        nameString = names.join(' and ');
        break;
      case 3:
        nameString = `${names[0]}, ${names[1]} and ${names[2]}`;
        break;
      default:
        nameString = `${names[0]}, ${names[1]} and ${len - 2} others`
        break;
    }
    return `${nameString} ${likeString}`
  }