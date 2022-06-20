function isSortedAndHow(array) {
    if (array.sort((a, b) => b - a) == array) {
      return 'yes, ascending'
    } else if (array.sort((a, b) => a - b) == array) {
      return 'yes, descending'
    } else
      return 'no';
}