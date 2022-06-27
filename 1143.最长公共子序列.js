/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    // if text1[i] = text2[j]  f[i, j] = f[i - 1, j -1] + 1
    // if text1[i] != text2[j] f[i, j] = Max(f[i -1, j], f[i, j - 1])
    const m = text1.length;
    const n = text2.length;
    const opt = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                opt[i][j] = opt[i - 1][j - 1] + 1;
            }
            else {
                opt[i][j] = Math.max(opt[i - 1][j], opt[i][j - 1])
            }
        }
    }
    return opt[m][n];
};
// @lc code=end

