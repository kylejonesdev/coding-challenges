//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

/*
Subtract one list from the other and return the result
It should remove all values from list a, which are present in list b keeping their order.
If a value is present in b, all of its occurrences must be removed from a.
*/

function arrayDiff(a, b) {
    return a.map(itemA => {
      let countB = b.reduce((acc,itemB) => {
        if(itemA === itemB) acc++;
        return acc;
      },0);
      return !countB ? itemA : null;
    }).filter(item => item !== null);
  }