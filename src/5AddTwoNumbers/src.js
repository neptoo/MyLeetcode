// 两个非空链表相加，位数逆序
// 输入(2 -> 4 -> 3) + (5 -> 6 ->4)
// 输出 7 -> 0 -> 8

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var c1 = l1,
    c2 = l2,
    c3, l3,
    s1 = [],
    s2 = [],
    s3 = [],
    carry = 0;
    // carry is the number added in next position

  while (c1 || c2) {
    if (c1) {
        s1.push(c1.val);
        c1 = c1.next;
    }
    if (c2) {
        s2.push(c2.val);
        c2 = c2.next;
    }
  }

  whlie(l1.length || l2.length || carry){
    var v1 = 0, v2 = 0;
    if (s1.length) {
      v1 = s1.pop();
    }
    if (s2.length) {
      v2 = s2.pop();
    }
    var sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);

    s3.push( sum % 10);
  }

  while(s3.length){
    var val = s3.pop();
    if(!c3) {
      l3 = new ListNode(val);
    }else{
      c3.next = new ListNode(val);  // get a new nodelist
      c3 = c3.next;
    }
  }
  return l3;
}