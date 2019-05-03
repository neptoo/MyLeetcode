// JS数据结构 栈的应用

// 1.整数：直接表示您在本轮中获得的积分数。
// 2. "+"：表示本轮获得的得分是前两轮有效 回合得分的总和。
// 3. "D"：表示本轮获得的得分是前一轮有效 回合得分的两倍。
// 4. "C"（一个操作）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。
// 每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。你需要返回你在所有回合中得分的总和。

// 输入: ["5","2","C","D","+"]
// 输出: 30

export default (arr) => {
  let result = []
  // 上一轮的数据  
  let pre1
  // 上上轮的数据  
  let pre2
  arr.forEach(item => {
    switch (item) {
      case 'C':
        if (result.length) {
          result.pop()
        }
        break
      case 'D':
        pre1 = result.pop()
        result.push(pre1, pre1 * 2)
        break
      case '+':
        pre1 = result.pop()
        pre2 = result.pop()
        result.push(pre2, pre1, pre2 + pre1)
        break
      default:
        // *1是为了将item转为number类型       
        result.push(item * 1)
    }
  })
  return result.reduce((prev, cur) => prev + cur)
}