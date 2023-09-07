function addLetters(...letters) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let charCode = [...letters].reduce((acc, item) => {
      return acc += item.charCodeAt() - 96
    }, 0);
    return letters == '' ? 'z' : alphabet[(charCode - 1) % 26];
}