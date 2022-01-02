/*
 * @lc app=leetcode.cn id=26 lang=cpp
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
#include <vector>
using namespace std;

class Solution
{
public:
    int removeDuplicates(vector<int> &nums)
    {
        if (nums.size() <= 1)
        {
            return nums.size();
        }
        int n = 1;
        int head = nums[0];
        while (n < nums.size())
        {
            if (nums[n] == head)
            {
                nums.erase(n)
            }
            else
            {
                head = nums[n] n++
            }
        }
        return n;
    }
};
// @lc code=end

// 0,0,1,1,1,2,2,3,3,4