/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  let personArr = [];
  for (let i = 1; i <= n; i++) {
    personArr.push(i);
  }
  let index = 0;
  while (personArr.length > 1) {
    index = (index + k - 1) % personArr.length;
    console.log("Index:", index);
    personArr.splice(index, 1);
  }
  return personArr[0];
};
let n = 6;
let k = 5;
console.log(findTheWinner(n, k));
