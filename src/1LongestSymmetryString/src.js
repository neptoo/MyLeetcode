// 给定一个字符串（数字或大小写字母）, 找出最长的对称的子串（如有多个，输出任意一个）。
// 例如：
// 输入：“abbaad”
// 输出：“abba”
var line = readline(); // 读取输入字符串
var len = line.length;

function reverseStr(str) { // 反转字符串
    return str.split("").reverse().join("");
}

function getSymmetry(str) {
    var maxSubStrings = "";
    for (var i = 0; i < len; i++) {
        for (var j = len; j > i; j--) {    // 两个for循环获得子字符串
            var temp = str.substring(i, j);
            if (temp == reverseStr(str) && maxSubStrings.length < temp.length) {
                maxSubStrings = temp;
            }
        }
    }
    return maxSubStrings;
}
if (len = 1 || line == reverseStr(line)) {
    console.log(line)
} else {
    console.log(getSymmetry(line))
}