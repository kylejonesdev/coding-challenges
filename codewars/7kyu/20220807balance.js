//Write a function that ensures there are more women (-1) than men (1)

function inviteMoreWomen(L) {
    let arr = L.reduce((acc,item) => {
      return acc += item;
    }, 0)
    return arr <= 0 ? false : true;  
}