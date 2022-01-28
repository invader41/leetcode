/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start

var Twitter = function () {
    // 大根堆
    this.index = 0;
    this.twitters = new MaxPriorityQueue({
        priority: (item) => item.index  //指定传入值的某个属性作为优先级,该值需要返回Number型
    })
    // 出边数组，图
    this.myfollows = new Map();
};

Twitter.prototype.checkUserId = function (userId) {
    if (!this.myfollows.has(userId)) {
        this.myfollows.set(userId, new Set());
    }
}

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    this.checkUserId(userId);
    this.index++;
    this.twitters.enqueue({ userId, tweetId, index: this.index });
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    this.checkUserId(userId);
    let list = this.twitters.toArray();
    let res = [];
    for (let i = 0; i < this.twitters.size(); i++) {
        const item = list[i].element;
        if (res.length >= 10) continue;
        if (this.myfollows.get(userId).has(item.userId) || item.userId === userId) {
            res.push(item.tweetId);
        }
    }
    return res;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    this.checkUserId(followerId);
    this.myfollows.get(followerId).add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    this.checkUserId(followerId);
    this.myfollows.get(followerId).delete(followeeId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

