/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
  let sumFormed = 0;
  let expectedSum = 1;
  let minPatches = 0;
  let i = 0;
  let m = nums.length;
  while (sumFormed < n) {
    if (sumFormed >= expectedSum) {
      expectedSum = sumFormed + 1;
    } else {
      if (i < m && nums[i] <= expectedSum) {
        sumFormed += nums[i];
        i++;
      } else {
        minPatches++;
        sumFormed += expectedSum;
      }
    }
  }

  return minPatches;
};

// let nums = [1, 3];
// let n = 6;

// let nums = [1, 5, 10];
// let n = 20;
let nums = [1, 2, 2];
let n = 5;
console.log(minPatches(nums, n));
