// 千分位格式化 
// 14231258转化为14，231，258

// 方法一
function formatAmount(num){
  var result = '',counter = 0;
  num = (num || 0).toString();
  for(var i = num.length-1; i >= 0; i--){
    counter++;
    result = num.charAt(i) + result;
    // 取到第i位的数字
    if(!(counter % 3) && i != 0){
      result = ',' + result;
    }
  }
}

// 方法二
function formatAmount(num){
  var num =(num || 0).toString(), result = '';
  while (num.length > 3){
    result = ',' + num.slice(-3) + result; // 截取倒数三个字符
    num = num.slice(0, num.length - 3);
  }
  if(num){ result = num + result; }
  return result;
}

// 方法3
num.toLocaleString();