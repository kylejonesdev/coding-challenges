//Determine whether or not each object's language property in an array is the same.
function isSameLanguage(list) {
    let filtered = list.filter(item => list[0].language === item.language);
    return filtered.length === list.length ? true : false;
}