/******************
 * YOUR CODE HERE *
 ******************/
function xify(str) {
  return str.replace(/[a-zA-Z ]/g, "x")
}
function yellingChars(str){
  return str.split("").map(char => char + "!").join("");
}
function indexedChars(str){
  const newStr = [];
  for (let i = 0; i < str.length; i++) {
  newStr.push(i + str[i]);
}
  return newStr.join('');
}
function numberedChars(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }

    const prevChar = str[i - 1];
    if (prevChar) {
      charCount[prevChar] += charCount[char];
    }
  }

  return charCount;
}
function exclaim(str) {
  return str.replace(/[!?.]/g, '!');
}
function repeatIt(str, n){
  let repeatedStr = ""
  for (let i = 0; i < n; i++){
    repeatedStr += str
  }
  return repeatedStr
}
function truncate(str){
  if(str.length <= 18){
    return str
  }else{

  }
  return str.slice(0, 15) + "..."
}
function emailify(str){
  const fullName = str.split(" ")
  return `${fullName[0][0]}${fullName[1]}.prsvr@gmail.com`.toLowerCase()
}
function reverse(str){
  const rArr = str.split("")
  rArr.reverse()
  const rStr =rArr.join("")
  return rStr
}
function onlyVowels(str){
  const vowels = /[aeiouAEIOU]/gi
  return str.match(vowels).join("")
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
      crazyStr += str[i];
    }
  }
    crazyStr = crazyStr.map((char, index) => {
    return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
  }).join("");
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
