//Create a function that checks whether an entered code is correct and not expired

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return (enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)) ? true : false;
}