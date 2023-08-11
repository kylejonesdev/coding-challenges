//A function that splits a string into two strings based on whether character indicies are even or odd.

function sortMyString(S) {
    let evens = [];
    let odds = [];
      S.split("").forEach((item, index) => {
        index % 2 === 0 ? evens.push(item) : odds.push(item);
      })
      return `${evens.join("")} ${odds.join("")}`;
}