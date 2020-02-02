/*
 * @lc app=leetcode.cn id=419 lang=javascript
 *
 * [419] 甲板上的战舰
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  let res = 0
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'X') {
        if (i > 0 && board[i - 1][j] === 'X' || j > 0 && board[i][j - 1] === 'X') {
          continue
        }
        res = res + 1
      }
    }
  }
  return res
};
// @lc code=end

