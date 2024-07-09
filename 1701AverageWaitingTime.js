/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  //   let flatArr = customers.flat();
  //   let L = 0;
  //   let R = 1;
  //   let totalTime = flatArr[L] + flatArr[R];
  //   let sum = 0;
  //   while (R < flatArr.length) {
  //     if (totalTime > flatArr[L]) {
  //       if (L !== 0) {
  //         totalTime += flatArr[R];
  //       }
  //       sum += totalTime - flatArr[L];
  //     } else {
  //       totalTime = flatArr[L] + flatArr[R];
  //       sum += totalTime - flatArr[L];
  //     }
  //     L += 2;
  //     R += 2;
  //   }
  //   return Number(Number.parseFloat(sum / customers.length).toFixed(5));
  let chefIdleTime = 1;
  let totalWaitingTime = 0;
  for (let customer of customers) {
    if (chefIdleTime <= customer[0]) {
      chefIdleTime = customer[0] + customer[1];
    } else {
      chefIdleTime = chefIdleTime + customer[1];
    }
    totalWaitingTime += chefIdleTime - customer[0];
  }
  //console.log(totalWaitingTime);
  return Number(Number.parseFloat(totalWaitingTime / customers.length).toFixed(5));
};
let customers = [
  [1, 2],
  [2, 5],
  [4, 3],
];
// let customers = [
//   [5, 2],
//   [5, 4],
//   [10, 3],
//   [20, 1],
// ];
// let customers = [
//   [2, 3],
//   [6, 3],
//   [7, 5],
//   [11, 3],
//   [15, 2],
//   [18, 1],
// ];
// [2, 3, 6, 3, 7, 5, 11, 3, 15, 2, 18, 1];

// 3 + 5 - 2;
// 8;

//4.16667
console.log(averageWaitingTime(customers));
