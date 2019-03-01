// 给定两个数字（0-9）字符串（长度不限）求它们的乘积。

// 1230*20=24600
var multiply = function(num1, num2) {
    if(num1 == "0" || num2 == '0'){
        return '0' ;
    }
    var res = new Array(num1.length + num2.length) ;
    for(var i = 0; i < res.length; i ++){    // 初始化数组元素
        res[i] = 0 ;
    }
     
    var a = num1.split('').reverse() ;
    var b = num2.split('').reverse() ;

    for(var i = 0; i < a.length; i ++){      // 计算每一位的值
        for(var j = 0; j < b.length; j ++){
            res[i+j] += a[i]*b[j] ;
        }
    }
     
    var carry = 0 ;
    var str = [] ;
     
    for(var i = 0; i < res.length; i ++){  // 把两位数以上的向上进位 
        res[i] += carry ;
        carry = parseInt(res[i] / 10 );
        res[i] = res[i] % 10 ;
        str[i] = res[i] ;
    }
     
    str = str.reverse().join("") ;
     
    var index = 0 ;
    while(str[index] === "0"){
        index ++ ;
    }
     
    return str.substring(index) ;  //为什么不是返回str？
    // str的长度是num1和num2的长度之和，可能比结果要长，
    // 前面就会有几个0，所以需要找到第一个不是零的位置，然后截取
     
};
console.log(multiply(readline(),readline())) ;