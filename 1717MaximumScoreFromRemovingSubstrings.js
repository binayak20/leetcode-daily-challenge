/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  let highPriorityStr = "";
  let lowPriorityStr = "";
  let result = 0;

  if (x > y) {
    highPriorityStr = "ab";
    lowPriorityStr = "ba";
  } else {
    highPriorityStr = "ba";
    lowPriorityStr = "ab";
  }
  const removeHighValuesStr = countAndRemoveOcurances(s, highPriorityStr);
  result += (Math.max(x, y) * (s.length - removeHighValuesStr.length)) / 2;

  const removeLowValuesStr = countAndRemoveOcurances(removeHighValuesStr, lowPriorityStr);
  result += (Math.min(x, y) * (removeHighValuesStr.length - removeLowValuesStr.length)) / 2;

  return result;
};

var countAndRemoveOcurances = function (str, subStr) {
  let charStack = [];

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (currentChar === subStr[1] && charStack.length > 0 && charStack[charStack.length - 1] === subStr[0]) {
      charStack.pop();
    } else {
      charStack.push(currentChar);
    }
  }
  return charStack.join("");
  //charStack.join('')
  //   let count = 0;
  //   let position = 0;

  //   while ((position = str.indexOf(subStr)) !== -1) {
  //     count++;
  //     str = str.slice(0, position) + str.slice(position + subStr.length);
  //   }
  //   return { count, str };
};

// let s = "cdbcbbaaabab",
//   x = 4,
//   y = 5;

let s = "aabbaaxybbaabb",
  x = 5,
  y = 4;

console.log(maximumGain(s, x, y));
