function toString(str) {
    return str.toString()
}
console.log(typeof(toString(true)))

function compareTwoStrings(strOne, strTwo) {
    return strOne.length === strTwo.length
}

console.log(compareTwoStrings("AB", "CD"))