function commonChars(words) {
  // Initialize the character count using the first word
  let firstWord = {};
  for (let char of words[0]) {
    firstWord[char] = (firstWord[char] || 0) + 1;
  }

  // Iterate through the rest of the words
  for (let i = 1; i < words.length; i++) {
    let curWord = {};
    for (let char of words[i]) {
      curWord[char] = (curWord[char] || 0) + 1;
    }
    // Update the counts in cnt to be the minimum with curCnt
    for (let char in firstWord) {
      if (curWord[char]) {
        firstWord[char] = Math.min(firstWord[char], curWord[char]);
      } else {
        firstWord[char] = 0;
      }
    }
  }

  let res = [];
  for (let char in firstWord) {
    for (let i = 0; i < firstWord[char]; i++) {
      res.push(char);
    }
  }
  console.log(res);
  return res;
}
const words = ["bella", "label", "roller"];
console.log(commonChars(words));
