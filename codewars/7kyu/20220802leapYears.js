//Determine whether or not a given year is a leap year.

function isLeapYear(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0 ? true : false;
}