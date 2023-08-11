//Given an amount and a percent decrease per day, determine how many days until the contents will be below the threshold.

function evaporator(content, evap_per_day, threshold){ 
    let dayCount = 0;
    let minContent = content * threshold / 100;
    while(content > minContent) {
      content -= content * evap_per_day / 100;
      dayCount ++;
    }
    return dayCount;
}