/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    //f[i,j] = f[i-1, j] + f[i, j-1]  // f[i, j ] = 0
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const opt = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                opt[i][j] = 0;
            } else if (i === 0 && j === 0) {
                opt[i][j] = 1;
            }
            else if (i === 0) {
                opt[i][j] = opt[i][j - 1];
            }
            else if (j === 0) {
                opt[i][j] = opt[i - 1][j];
            }
            else { opt[i][j] = opt[i - 1][j] + opt[i][j - 1]; }
        }
    }
    return opt[m - 1][n - 1];

};
// @lc code=end

