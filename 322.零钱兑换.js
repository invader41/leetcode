/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const opt = [0];
    for (let i = 1; i <= amount; i++) {
        opt[i] = Infinity;
        for (let j = 0; j < coins.length; j++) {
            if (i >= coins[j]) {
                opt[i] = Math.min(opt[i], opt[i - coins[j]] + 1);
            }
        }
    }
    if (opt[amount] === Infinity) {
        opt[amount] = -1;
    }
    return opt[amount];
};
// @lc code=end

