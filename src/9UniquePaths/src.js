// 动态规划

// 一个机器人位于一个m x n网格的左上角,机器人试图达到网格的右下角。
// 机器人每次只能向下或者向右移动一步，网格中有障碍物。
// 那么从左上角到右下角将会有多少条不同的路径

// 输入:
// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// 输出: 2

var uniquePathswithObstacle = function(obstacleGrid) {
  const m = obstacleGrid.length,
    n = obstacleGrid[0].length;
  const dp = Array(m);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(n);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const prevI = i - 1;
      const prevJ = j - 1;
      let sum = i === 0 && j === 0 ? 1 : 0;
      if (prevI > 0 && !obstacleGrid[prevI][j]) {
        //一行，每个节点是否通过依赖于左方节点
        sum += dp[prevI][j];
      }
      if (prevJ > 0 && !obstacleGrid[i][prevJ]) {
        // 一列，每个节点是否通过依赖于上方节点
        sum += dp[i][prevJ];
      }
      dp[i][j] = sum;
      if (obstacleGrid[i][j]) {
        // 起始元素是1(障碍物)
        dp[i][j] = 0;
      }
    }
  }
  return dp[m - 1][n - 1];
}
