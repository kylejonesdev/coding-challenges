//Iterate through objects and tabulate a specific property
function countLanguages(list) {
    let res = {};
    Object.keys(list).forEach((item, index) => {
      let lang = list[item].language;
      if(!res[lang]) {
        res[lang] = 1;
      } else if (res[lang]) {
        res[lang] ++;
      }
    })
    return res;
}