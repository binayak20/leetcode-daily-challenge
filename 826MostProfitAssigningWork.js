/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  const { sorted_difficulty, sorted_profit } = getRelativeArray(difficulty, profit);
  const sorted_worker = worker.sort((x, y) => x - y);
  //   console.log("sorted_difficulty:", sorted_difficulty);
  //   console.log("sorted_profit:", sorted_profit);
  //   console.log("sorted_worker:", sorted_worker);
  let L1 = 0; //worker first index
  let L2 = 0;
  let max = 0;
  let maxProfit = 0;
  while (L1 < sorted_worker.length) {
    if (sorted_difficulty[L2] <= sorted_worker[L1]) {
      max = Math.max(max, sorted_profit[L2]);
      L2++;
    } else {
      maxProfit += max;
      L1++;
      //  L2--;
    }
  }
  return maxProfit;
};
function getRelativeArray(a, b) {
  // Create a sorted copy of array a and also keep track of original indices
  let indexedA = a.map((value, index) => ({ value, index }));
  indexedA.sort((x, y) => x.value - y.value);

  let b_sort = indexedA.map((item) => b[item.index]);

  a.sort((x, y) => x - y);
  return { sorted_difficulty: a, sorted_profit: b_sort };
}
// let a = [2, 4, 6, 8, 10];
// let b = [10, 20, 30, 40, 50];
// let worker = [4, 5, 6, 7];
// let a = [85, 47, 57];
// let b = [24, 66, 99];
// let worker = [40, 25, 25];
let a = [13, 37, 58];
let b = [4, 90, 96];
let worker = [34, 45, 73];
// let a = [64, 88, 97];
// let b = [53, 86, 89];
// let worker = [98, 11, 6];
console.log(maxProfitAssignment(a, b, worker));
