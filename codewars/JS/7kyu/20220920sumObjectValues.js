//Given an array of departments, calculate a score and return a specific string of text

function boredom(staff){
    let map = new Map()
    map.set('accounts', 1)
    map.set('finance', 2)
    map.set('canteen', 10)
    map.set('regulation', 3)
    map.set('trading', 6)
    map.set('change', 6)
    map.set('IS', 8)
    map.set('retail', 5)
    map.set('cleaning', 4)
    map.set('pissing about', 25)
    const score = Object.values(staff).reduce((acc, item) => {
      return acc + map.get(item);
    }, 0);
    if(score >= 100) return 'party time!!'
    else if (score < 100 && score > 80) return 'i can handle this'
    else return 'kill me now'
}