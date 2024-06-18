var judgeSquareSum = function (c) {
  for (let a = 1; a * a <= c; a++) {
    console.log(c, a);
    let bSq = c - a * a;
    let b = Math.floor(Math.sqrt(bSq));
    console.log(bSq);
    if (a * a + b * b === c) {
      return true;
    }
  }
  return false;
};
let c = 3;
console.log(judgeSquareSum(c));
