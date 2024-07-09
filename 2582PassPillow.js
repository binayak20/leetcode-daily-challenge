/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  let pillowPosition = 1;
  let currentTime = 0;
  let revDirrection = false;

  while (currentTime < time) {
    if (!revDirrection) {
      pillowPosition++;
    } else {
      pillowPosition--;
    }
    if (pillowPosition === 1 || pillowPosition === n) {
      revDirrection = !revDirrection;
    }
    currentTime++;
  }
  return pillowPosition;
};
let n = 6;
let time = 11;

// 1 2 3 4 5 6 5 4 3 2 1 2
// 1 2 3 4 3 2
// let n = 4;
// let time = 5;
// 1 2 3
// let n = 3;
// let time = 2;
// let n = 9;
// let time = 4;

// 1 2 3 4 5 6 7 8 9
console.log(passThePillow(n, time));
