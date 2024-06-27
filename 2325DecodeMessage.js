/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  let inputStr = key.split(" ").join("");
  let myHash = {};
  let inputKey = "";
  let alph = "abcdefghijklmnopqrstuvwxyz";
  let L = 0;
  let res = "";
  for (let char of inputStr) {
    if (!myHash.hasOwnProperty(char)) {
      myHash[char] = char;
    }
  }

  for (let char in myHash) {
    inputKey += char;
  }

  while (L < message.length) {
    let index = inputKey.indexOf(message[L]);
    res = res + (index === -1 ? " " : alph[index]);
    L++;
  }
  return res;
};

// let key = "the quick brown fox jumps over the lazy dog";
// let message = "vkbs bs t suepuv";
let key = "eljuxhpwnyrdgtqkviszcfmabo";
let message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb";
console.log(decodeMessage(key, message));
