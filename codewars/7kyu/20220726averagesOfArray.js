//return the averages of each number and the number immediately following

function averages(numbers) {
    if(!numbers || numbers.length <= 1) return [];
    let results = numbers.map((item, index, array) => {
      if(index === 0) return;
      return (item + array[index - 1]) / 2;
    });
    return results.splice(1);
}