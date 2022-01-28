/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let m = board.length;
    let n = board[0].length;
    var visited = new Array();
    for (let i = 0; i < m; i++) {
        visited[i] = new Array(n).fill(false);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((i === 0 || i === m - 1 || j === 0 || j === n - 1) && board[i][j] === 'O' && !visited[i][j]) {
                bfs(board, visited, i, j, m, n);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O' && !visited[i][j]) {
                board[i][j] = 'X';
            }
        }
    }
};

function bfs(board, visited, x, y, m, n) {
    let q = [];
    let dx = [-1, 0, 0, 1];
    let dy = [0, -1, 1, 0];
    q.push([x, y]);
    visited[x][y] = true;
    while (q.length > 0) {
        let head = q.shift();
        for (let i = 0; i < 4; i++) {
            var nx = head[0] + dx[i];
            var ny = head[1] + dy[i];
            if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
            if (board[nx][ny] === 'X') continue;
            if (visited[nx][ny]) continue;
            q.push([nx, ny]);
            visited[nx][ny] = true;
        }
    }
}
// @lc code=end

