//List the names and countries of objects representing developers who list a language of Python

function getFirstPython(list) {
    let result = [];
    list.forEach(item => {
      if(item.language === "Python") return result.push(`${item.firstName}, ${item.country}`)
      })
    return result[0] || 'There will be no Python developers';
}