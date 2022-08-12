function triangle(row) {
    let arr = [...row];
    let map = new Map;
    map.set('RG', 'B');
    map.set('GR', 'B');
    map.set('GB', 'R');
    map.set('BG', 'R');
    map.set('BR', 'G');
    map.set('RB', 'G');
    map.set('RR', 'R');
    map.set('GG', 'G');
    map.set('BB', 'B');
    
    if(arr.length === 1) {
      return arr.join('');
    }
    let temp = [];
    for(let i = 0; i < arr.length - 1; i ++) {
      let sw = arr[i] + arr[i+1];
      temp.push(map.get(sw));
    }
    return (triangle(temp));
}