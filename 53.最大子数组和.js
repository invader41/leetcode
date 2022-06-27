/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    //f[i] = Max( f[i-1] + nums[i], num[i])
    const n = nums.length;
    const opt = [];
    opt[0] = nums[0];
    let max = opt[0];
    for (let i = 1; i < n; i++) {
        opt[i] = Math.max(opt[i - 1] + nums[i], nums[i]);
        max = Math.max(max, opt[i]);
    }
    return max;
};
// @lc code=end

