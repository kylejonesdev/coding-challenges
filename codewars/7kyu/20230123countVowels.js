function getCount(str) {
    return [...str].filter((item) => 'aeiou'.includes(item)).length
}