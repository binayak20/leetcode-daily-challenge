/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) return false;
  let map = {};
  for (let num in hand) {
    map[hand[num]] = (map[hand[num]] || 0) + 1;
  }

  let group = [];
  let i = 0;
  while (Object.keys(map).length > 0) {
    let sequenceFound = false;
    for (let num in map) {
      if (map.hasOwnProperty(num)) {
        if (group.length === 0) {
          group.push(Number(num));
          map[num] = map[num] - 1;
          if (map[num] === 0) {
            delete map[num]; // Remove the item from map if its value is 0
          }
          sequenceFound = true;
        } else if (map.hasOwnProperty(group[i] + 1)) {
          group.push(Number(group[i] + 1));
          map[num] = map[num] - 1;
          if (map[num] === 0) {
            delete map[num]; // Remove the item from map if its value is 0
          }
          i++;
          sequenceFound = true;
        } else {
          return false;
        }
        if (group.length === groupSize) {
          group = [];
          i = 0;
          break;
        }
      }
    }
    if (!sequenceFound) {
      return false;
    }
  }

  return true;
};

// const hand = [1, 2, 3, 6, 2, 3, 4, 7, 8];
// const groupSize = 3;
const hand = [1, 2, 3, 4, 5];
const groupSize = 4;
// const hand = [1, 2, 3, 4, 5, 6];
// const groupSize = 2;
// const hand = [8, 10, 12];
// const groupSize = 3;

console.log(isNStraightHand(hand, groupSize));
