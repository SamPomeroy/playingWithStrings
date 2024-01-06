/******************
 * YOUR CODE HERE *
 ******************/
function xify(str) {
  // return str.replace(/[a-zA-Z ]/g, "x")
  var result = ""
  for(var i = 0; i < str.length; i++){
    result += "x"
  }
  return result
}
function yellingChars(str){
  // return str.split("").map(char => char + "!").join("");
  var newStr = ""
  for (let i = 0; i < str.length; i++){
    newStr += str[i] + "!"
  }
  return newStr
}
function indexedChars(str){
//   const newStr = [];
//   for (let i = 0; i < str.length; i++) {
//   newStr.push(i + str[i])
// }
//   return newStr.join('')
const newStr = []
for (let i = 0; i < str.length; i++) {
  newStr += str.indexOf() + str[i]
}
return newStr
}
function numberedChars(str) {
  // const chars = str.split("")
  // for(let i = 0; 1 < chars.length; i++){
  // }
  //   return "(" + chars.indexOf() + ")" + chars 
}
function exclaim(str) {
  // return str.replace(/[!?.]/g, '!');
  let result = ""
  for (let i = 0; i < str.length; i++){
    if (str[i] === "." || str[i] === "?"){
    result += "!"
  } else {
    result += str[i]
  }
}
    return result
}
function repeatIt(str, n){
  let repeatedStr = ""
  for (let i = 0; i < n; i++){
    repeatedStr += str
  }
  return repeatedStr
}
function truncate(str){
  // if(str.length <= 18){
  //   return str
  // }else{
  // }
  // return str.slice(0, 15) + "..."
  if (str.length <= 18){
    return str
     }else{
    return str.substring(0, 15) + "..."
  }
}
function emailify(str1, str2){
  // const fullName = str.split(" ")
  // return `${fullName[0][0]}${fullName[1]}.prsvr@gmail.com`.toLowerCase()
return str1[0][0] + str2[0] + "prsvr@gmail.com"
}
function reverse(str){
  // const rArr = str.split("")
  // rArr.reverse()
  // const rStr =rArr.join("")
  // return rStr
  let rStr = ""
  for (let i = str.length - 1; i >= 0; i--){
    rStr += str[i]
  }
  return rStr
}
function onlyVowels(str){
  // const vowels = /[aeiouAEIOU]/gi
  // return str.match(vowels).join("")
  const vowels = 'aeiouAEIOU';
  let result = '';
  for (let i = 0; i < str.length; i++){
    if (vowels.includes(str[i])){
      result += str[i]
    }
  }
  return result
}
function crazyCase(str) {
  return str.split("").map((char, index) => index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()).join("");
}
function titleCase(str) {
  const words = str.split(" ")
  for (let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase()
  }
  return words.join(" ")
}
function camelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
  return index === 0 ? word.toLowerCase() : word.toUpperCase();
 }).replace(/\s+/g, '')
}
function crazyCase2ReturnOfCrazyCase(str) {
  str = str.toLowerCase();
  let crazyStr = "";
  for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
      crazyStr += str[i]
    }
  }
    crazyStr = crazyStr.split("").map((char, index) => {
    return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
  }).join("")
  return crazyStr;
}


 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof emailify === 'undefined') {
  emailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  emailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
