/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  if (bloomDay.length < m * k) return -1;

  let l = bloomDay[0];
  let h = bloomDay[0];

  for (let i = 0; i < bloomDay.length; i++) {
    if (bloomDay[i] < l) {
      l = bloomDay[i];
    }
    if (bloomDay[i] > h) {
      h = bloomDay[i];
    }
  }
  let res = -1;
  while (l <= h) {
    let middle = Math.floor(l + (h - l) / 2);
    if (isPossibleSol(bloomDay, m, k, middle) === true) {
      res = middle;
      h = middle - 1;
    } else {
      l = middle + 1;
    }
  }

  return res;
};
function isPossibleSol(arr, boq, flowers, m) {
  let adj = 0;
  let bc = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= m) {
      adj++;

      if (adj === flowers) {
        bc++;
        if (bc === boq) {
          return true;
        }
        adj = 0;
      }
    } else {
      adj = 0;
    }
  }
  return false;
}
// let bloomDay = [1, 10, 3, 10, 2];
// let m = 3;
// let k = 1;
// let bloomDay = [1, 10, 3, 10, 2];
// let m = 3;
// let k = 2;

let bloomDay = [7, 7, 7, 7, 12, 7, 7];
let m = 2;
let k = 3;
console.log(minDays(bloomDay, m, k));
