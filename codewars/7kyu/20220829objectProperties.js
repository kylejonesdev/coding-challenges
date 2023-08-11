//Return the count of objects with certain properties

function countDevelopers(list) {
    return list.reduce((acc, item) => {
      if (item.continent === 'Europe' && item.language === 'JavaScript') {return acc += 1};
      return acc;
    }, 0)
}