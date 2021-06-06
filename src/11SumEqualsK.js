// 给定一个整数数组和整数k，找到和为k的连续子数组的个数
// 输入 nums = [1, 1, 1] k = 2
// 输出 2，两种情况 [1, 1], [1, 1]

/* const subarraySum = (nums, k) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;
      for (let q = i; q <= j; q++) {
        sum += nums[q];
      }
      if (sum == k) count++;
    }
  }
  return count;
}; */

/* const subarraySum = (nums, k) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum == k) count++;
    }
  }
  return count;
}; */


var subarraySum = function (nums, k) {
  if (nums.length === 0) return 0;
  let map = { 0: 1 };
  let prefixSum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (map[prefixSum - k]) {
      count += map[prefixSum - k];
    }

    if (map[prefixSum]) {
      map[prefixSum]++;
    } else {
      map[prefixSum] = 1;
    }
  }
  return count
};
