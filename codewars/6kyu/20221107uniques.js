//Given a sorted string or array, return the array without duplicates
var uniqueInOrder=function(iterable){
    typeof iterable === 'string' ? iterable = iterable.split('') : iterable;
    return iterable.reduce((acc, item, index, arr) => {
      if(item !== arr[index - 1]) acc.push(item);
      return acc;
    }, [])
}