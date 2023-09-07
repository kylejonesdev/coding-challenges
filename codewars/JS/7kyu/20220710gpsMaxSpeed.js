/*
Given an array where each value is the total distance from an origin point (x)
and the sample rate at which each distance is obtained in seconds (s),
determine the highest max speed attained, rounded down to the nearest whole number
*/

function gps(s, x) {  
    let arr = x.map((item, index, arr) => Math.round((arr[index + 1] - item) * 3600 / s),1).sort((a, b) => b - a);
    return Math.floor(arr[0]) > 0 ? Math.floor(arr[0]) : 0;
}