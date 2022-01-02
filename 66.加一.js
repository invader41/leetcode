/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let shouldShift = true;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (shouldShift) {
            digits[i]++;
        }
        if (digits[i] >= 10) {
            shouldShift = true;
            digits[i] = 0;
        } else {
            shouldShift = false;
        }
    }
    if (shouldShift) {
        digits.unshift([1]);
    }
    return digits;
};
// @lc code=end

