/* 给你一个字符串 s，找到 s 中最长的回文子串。

示例 1：
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

示例 2：
输入：s = "cbbd"
输出："bb"

示例 3：
输入：s = "a"
输出："a"

示例 4：
输入：s = "ac"
输出："a"
 

提示：
1 <= s.length <= 1000
s 仅由数字和英文字母（大写和/或小写）组成 */

var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    helper(i, i);
    helper(i, i + 1);
  }
  function helper(m, n) {
    while ((m > 0) & (n < s.length) & (s[m] == s[n])) {
      m--;
      n++;
    }
    // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
    // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
    if (n - m + 1 > res.length) {
      res = s.slice(m + 1, n);
    }
  }
  return res;
};
