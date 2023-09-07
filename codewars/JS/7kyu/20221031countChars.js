function getStrings(city){
    //create copy of city
    let premap = city.toLowerCase().split('').sort();
    //initialize map to hold number of each char
    let myMap = new Map();
    //tally to track ongoing count of each char before added to myMap
    let tally = 0;
    //count successive chars and add to myMap
    for(let i = 0; i < premap.length; i++) {  
      if(premap.lastIndexOf(premap[i]) === i && premap[i].toLowerCase() !== premap[i].toUpperCase()) {
        tally ++;
        myMap.set(premap[i], tally);
        tally = 0;
      } else if(premap[i].toLowerCase() !== premap[i].toUpperCase()){
        tally ++;
      }
    }
    //initialize result array
    let res = []
    //loop through city string
    for(let i = 0; i < city.length; i++) {
      let char = city[i].toLowerCase();
      //if the first occurance of a char
      if(char !== char.toUpperCase() && city.toLowerCase().indexOf(char) === i) {
        const occurances = myMap.get(char);
        //assemble an array item showing the occurances in required format
        res.push(`${char}:${'*'.repeat(occurances)}`)
      }
    }
    //create a string from the res array properly split by commas
    return res.join(',');  
}