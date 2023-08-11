//Given a speed int and a road string, determine if the ball can make it to the end
//The ball loses one speed after it rolls a distance equal to its speed
//At the point it loses one speed, it loses an additional speed for each crack it passed
//A flat area is "_"
//A crack is "x"

function ballTest(s, r) {
    let speed = s;
    let distance = 0;
    let i = 0;
    while(speed > 0) {
      let segment = r.slice(distance, distance + speed);
      let cracked = 0;
      if(!segment) break;
      for(let i of segment) {
        if(i === "x") cracked++;
      }
      distance += speed;
      speed = speed - 1 - cracked;
    }
    return !r.charAt(distance);    
}