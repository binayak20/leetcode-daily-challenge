// class Solution {
/**
 * @param {string[]} strs
 * @returns {string}
 */
function encode(strs) {
  let a = strs.map((str) => `${str.length}#${str}`).join("");
  console.log(a);
  return a;
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function decode(str) {
  let result = [];
  let i = 0;
  let charCount = "";
  while (i < str.length) {
    let charLength = 0;
    if (Number.isInteger(parseInt(str[i])) && str[i + 1] === "#") {
      charCount += str[i];
      charLength = parseInt(charCount);
      result.push(str.slice(i + 2, i + 2 + charLength));
      i = i + 2 + charLength;
      charCount = "";
    } else if (Number.isInteger(parseInt(str[i])) && Number.isInteger(parseInt(str[i + 1]))) {
      charCount += str[i];
      i++;
    } else {
      i++;
    }
  }
  return result;
}
let input = ["we", "say", ":", "yes", "!@#$%^&*()"];
//let input = ["neet", "code", "love", "you"]
console.log(decode(encode(input)));
