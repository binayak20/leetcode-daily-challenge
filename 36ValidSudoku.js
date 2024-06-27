/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!isValid(i, j, board)) {
        return false;
      }
    }
  }
  return true;
};
function isValid(row, col, board) {
  if (board[row][col] === ".") return true;
  for (let i = 0; i < 9; i++) {
    let box_row_start = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    let box_col_start = 3 * Math.floor(col / 3) + (i % 3);
    // console.log(box_row_start, box_col_start);
    if (col !== i && board[row][i] === board[row][col]) return false;
    if (row !== i && board[i][col] === board[row][col]) return false;
    if (box_row_start !== row && box_col_start !== col && board[box_row_start][box_col_start] === board[row][col])
      return false;
  }
  return true;
}

let board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
