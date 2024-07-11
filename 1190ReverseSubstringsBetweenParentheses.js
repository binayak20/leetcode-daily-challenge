/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  let stack = [];
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(result.length);
    } else if (s[i] === ")") {
      let start = stack.pop();
      result = reverse(result, start, result.length);
    } else {
      result += s[i];
    }
  }
  return result;
};
var reverse = function (result, start, end) {
  const reverseSubString = result.substring(start, end).split("").reverse().join("");
  let remainingString = "";
  if (start > 0) {
    remainingString = result.substring(0, start);
  }
  return remainingString + reverseSubString;
};
let s = "(abcd)";
//let s = "(u(love)i)";
//let s = "(ed(et(oc))el)";

console.log(reverseParentheses(s));
