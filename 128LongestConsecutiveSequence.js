/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let myHash = {};
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    myHash[i] = nums[i];
  }
  //   for (let i of nums) {
  //     myHash[i] = i;
  //   }
  for (const key in myHash) {
    // if (myHash.hasOwnProperty(key)) {
    //   console.log(`Key: ${key}, Value: ${myHash[key]}`);
    // }

    if (key === 0) {
      console.log(key);
      result++;
    } else {
      if (myHash.hasOwnProperty(key - 1)) {
        result++;
      }
    }
  }
  console.log(result);
  console.log(myHash);
};
let nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
