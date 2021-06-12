// 反转字符串

// 输入: "Let's Code and Play"
// 输出: "s'teL edoC dna yalP"
// 注： 每个单词以单个空格分隔

export default (str) => {
  let arr = str.split(' ')
  // 对数组的每个元素进行反转 使用map()遍历
  return arr.map(item => {
    // item为字符串 没有reverse()
    item.split('').reverse().join('')
  }).join(' ')
}