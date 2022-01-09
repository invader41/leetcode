/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    //前缀和
    let s = [0];
    //Hash
    let h = new Map();
    //res
    let res = 0;
    h.set(0, 1);
    for (let i = 1; i <= nums.length; i++) {
        s[i] = s[i - 1] + nums[i - 1];
        if (h.has(s[i] - k)) {
            res += h.get(s[i] - k);
        };
        h.set(s[i], (h.get(s[i]) || 0) + 1);
    }

    return res;
};
// @lc code=end

