/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let L = 0;
  let R = 1;
  let total = 0;
  while (R <= nums.length) {
    console.log(nums[R], nums[L]);
    let max = Math.max(nums[L], nums[R]);
    total += max;
    L = L + 2;
    R = R + 2;
  }
  return total;
};
let nums = [1, 2, 3, 1];
console.log(rob(nums));
