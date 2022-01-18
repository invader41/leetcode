/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) return null;
    let temp = lists[0];
    for (let i = 1; i < lists.length; i++) {
        temp = mergeTwoLists(temp, lists[i]);
    }
    return temp;
};

var mergeTwoLists = function (list1, list2) {
    let res = new ListNode(null, null);
    let head = res;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            head.next = list1;
            list1 = list1.next;
        } else {
            head.next = list2;
            list2 = list2.next;
        }
        head = head.next;
    }

    head.next = list1 || list2

    return res.next;
};
// @lc code=end

