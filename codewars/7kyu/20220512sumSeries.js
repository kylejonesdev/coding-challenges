//https://www.codewars.com/kata/555eded1ad94b00403000071/solutions/javascript/me/best_practice

//Given the series: 1 + 1/4 + 1/7 + 1/10
//Return the sum of the series up to the nth value

function SeriesSum(n)
{
  let [result, denom] = [0, 1];
  for(let i = 0; i < n; i++) {
    result += 1 / denom;
    denom += 3;
  }
  return result.toFixed(2).toString();
}