/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefix = [];
  let postfix = [];
  let result = [];
  let pre = 1;
  let post = 1;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefix[i] = pre;
    } else {
      pre = pre * nums[i - 1];
      prefix[i] = pre;
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      postfix[i] = post;
    } else {
      post = post * nums[i + 1];
      postfix[i] = post;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * postfix[i];
  }
  return result;
};

let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
