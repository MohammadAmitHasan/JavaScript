

var addTwoNumbers= function(l1, l2) {
    let carry = 0;
    let result = new ListNode(0);
    let tail = result;
  
    while (l1 || l2 || carry) {
      const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      carry = Math.floor(sum / 10);
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
      l1 = l1 && l1.next;
      l2 = l2 && l2.next;
    }
  
    return result.next;
  }

  const result = addTwoNumbers([2,4,3], [5,6,4]);
console.log(result);