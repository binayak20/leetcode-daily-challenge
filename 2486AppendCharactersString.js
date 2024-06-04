/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {
  let sLeft = 0;
  let tLeft = 0;
  while (sLeft < s.length) {
    if (s[sLeft] === t[tLeft]) {
      sLeft++;
      tLeft++;
    } else {
      sLeft++;
    }
  }
  return t.length - tLeft;
};
// let s = "coaching";
// let t = "coding";
// let s = "abcde";
// let t = "a";
let s = "z";
let t = "abcde";
console.log(appendCharacters(s, t));
