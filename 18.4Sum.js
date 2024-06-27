/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) return [];
  nums.sort((a, b) => a - b);

  let sum = 0;
  let res = [];
  let myHash = {};

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        for (let l = k + 1; l < nums.length; l++) {
          sum = 0;
          sum += nums[i] + nums[j] + nums[k] + nums[l];
          if (sum === target) {
            let p = [nums[i], nums[j], nums[k], nums[l]];
            if (!myHash.hasOwnProperty(p)) {
              myHash[p] = p;
            }
          }
        }
      }
    }
  }
  for (let val in myHash) {
    res.push(myHash[val]);
  }
  return res;
};
let nums = [1, 0, -1, 0, -2, 2];
let target = 0;

// let nums = [2, 2, 2, 2, 2];
// let target = 8;
console.log(fourSum(nums, target));
