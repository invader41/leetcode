/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    //f[n] = max {f[j] + 1}
    // max { f[n] }
    const n = nums.length;
    const opt = [];
    let max = 1;
    for (let i = 0; i < n; i++) {
        opt[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j])
                opt[i] = Math.max(opt[j] + 1, opt[i]);
        }
        max = Math.max(max, opt[i]);
    }
    return max;
};
// @lc code=end

