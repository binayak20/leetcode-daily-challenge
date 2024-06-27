/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closet = 0;
  let minDifference = Number.MAX_VALUE;

  for (let i = 0; i < nums.length - 2; i++) {
    let L = i + 1;
    let R = nums.length - 1;

    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R];
      if (sum === target) return target;
      if (Math.abs(sum - target) < minDifference) {
        minDifference = Math.abs(sum - target);
        closet = sum;
      }
      if (target > sum) {
        L++;
      } else {
        R--;
      }
    }
  }
  return closet;
};

let nums = [-1, 2, 1, -4];

let target = 1;
console.log(threeSumClosest(nums, target));
