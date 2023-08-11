function isSortedAndHow(array) {
    let arrAsc = [...array].sort((a, b) => a - b);
    let arrDsc = [...array].sort((a, b) => b - a);
    if (arrAsc.join() === array.join()) {
      return 'yes, ascending'
    } else if (arrDsc.join() == array.join()) {
      return 'yes, descending'
    } else {
      return 'no';
      }
}