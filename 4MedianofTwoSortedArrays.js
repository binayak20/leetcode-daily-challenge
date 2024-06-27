/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  let midIndex = Math.floor(mergedArray.length / 2);

  if (mergedArray.length % 2 === 0) {
    return (mergedArray[midIndex] + mergedArray[midIndex - 1]) / 2;
  } else {
    return mergedArray[midIndex];
  }
};

let nums1 = [1, 2];
let nums2 = [3, 4];
console.log(findMedianSortedArrays(nums1, nums2));
