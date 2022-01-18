/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    //出边数组
    let to = [];
    for (let i = 0; i < numCourses; i++) {
        to.push([]);
    }
    let inDeg = new Array(numCourses).fill(0);
    for (let i = 0; i < prerequisites.length; i++) {
        let ai = prerequisites[i][0];
        let bi = prerequisites[i][1];
        to[bi].push(ai);
        inDeg[ai]++;
    }

    let q = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDeg[i] === 0) q.push(i);
    }
    let lession = [];
    while (q.length > 0) {
        let x = q.shift();
        lession.push(x);
        to[x].forEach(y => {
            inDeg[y]--;
            if (inDeg[y] === 0) {
                q.push(y);
            }
        })
    }
    if (lession.length != numCourses) {
        return [];
    }
    return lession;
};
// @lc code=end

