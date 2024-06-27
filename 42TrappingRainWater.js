/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let leftMax = [];
  let initialLeftMax = height[0];
  let initialRightMax = height[height.length - 1];
  let rightMax = [];
  let result = 0;
  for (let i = 0; i < height.length; i++) {
    if (i === 0) {
      leftMax.push(height[i]);
    } else {
      initialLeftMax = Math.max(height[i], initialLeftMax);
      leftMax.push(initialLeftMax);
    }
  }
  for (let i = height.length - 1; i >= 0; i--) {
    if (i === height.length - 1) {
      rightMax.unshift(height[i]);
    } else {
      initialRightMax = Math.max(height[i], initialRightMax);
      rightMax.unshift(initialRightMax);
    }
  }
  for (let i = 0; i < height.length; i++) {
    result = result + Math.abs(Math.min(rightMax[i], leftMax[i]) - height[i]);
  }

  return result;
};
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let heighl = [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3];
let heighk = [3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1];
console.log(trap(height));
