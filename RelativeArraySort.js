//InputDeviceInfo
// a = [2, 6, 4, 10, 8];
// b = [10, 30, 20, 50, 4];

// Output:
// a = [2, 4, 6, 8, 10];
// b = [10, 20, 30, 4, 50];

let a = [2, 6, 4, 10, 8];
let b = [5, 6];

// Create a sorted copy of array a and also keep track of original indices
// let indexedA = a.map((value, index) => ({ value, index }));
// indexedA.sort((x, y) => x.value - y.value);
// console.log(indexedA);

// let b_sort = indexedA.map((item) => b[item.index]);
// console.log(b_sort);
// a.sort((x, y) => x - y);
// console.log(a);
const k = a.filter((val) => {
  return b.indexOf(val) === 1;
});
console.log(k);
