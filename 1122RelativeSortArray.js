/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let myMap = {};
  for (let i = 0; i < arr1.length; i++) {
    if (myMap.hasOwnProperty(arr1[i])) {
      myMap[arr1[i]]++;
    } else {
      myMap[arr1[i]] = 1;
    }
  }
  let result = [];
  for (let i = 0; i < arr2.length; i++) {
    if (myMap.hasOwnProperty(arr2[i])) {
      while (myMap[arr2[i]] > 0) {
        result.push(arr2[i]);
        myMap[arr2[i]]--;
      }
    }
  }
  let remaining = [];
  for (let item in myMap) {
    if (myMap[item] > 0) {
      while (myMap[item] > 0) {
        remaining.push(parseInt(item));
        myMap[item]--;
      }
    }
  }
  remaining.sort((x, y) => x - y);

  result = result.concat(remaining);
  return result;
};

// let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
let arr1 = [2, 21, 43, 38, 0, 42, 33, 7, 24, 13, 12, 27, 12, 24, 5, 23, 29, 48, 30, 31];
// let arr2 = [2, 1, 4, 3, 9, 6];
let arr2 = [2, 42, 38, 0, 43, 21];
console.log(relativeSortArray(arr1, arr2));
