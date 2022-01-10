/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let degreeNums = degree(nums);
    let res = 0;
    for (let i = 0; i < degreeNums.length; i++) {
        let degreeNum = degreeNums[i];
        let l = 0;
        let r = nums.length - 1;
        while (l < r && (nums[l] !== degreeNum || nums[r] !== degreeNum)) {
            if (nums[l] !== degreeNum) l++;
            if (nums[r] !== degreeNum) r--;
        }
        if (res === 0) {
            res = r + 1 - l;
        } else {
            res = Math.min(res, r + 1 - l);
        }
    }
    return res;
};

function degree(nums) {
    let h = new Map();
    let degree = 0;
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (h.has(nums[i])) {
            h.set(nums[i], h.get(nums[i]) + 1);
        } else {
            h.set(nums[i], 1);
        }
        degree = Math.max(h.get(nums[i]), degree);
    }

    for (var [key, value] of h) {
        if (value === degree) {
            res.push(key);
        }
    }
    return res;
}
// @lc code=end

