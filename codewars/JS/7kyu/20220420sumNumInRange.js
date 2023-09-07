//https://www.codewars.com/kata/55f2b110f61eb01779000053/solutions/javascript/me/best_practice

//Find the sum of all integers in a range, inclusive.

function getSum( a,b )
{
  let less, more, result = 0;
  a < b ? [less, more] = [a, b] : [less, more] = [b, a];
  for(i = less; i <= more; i++) result += i;
  return result;
}