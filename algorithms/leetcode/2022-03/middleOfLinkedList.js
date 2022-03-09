// Restate the problem
// Find the node that lies in the middle of a linked list. if there are an even number use the one further from the head

// Assumptions
// We can do this in one pass
// If we have two runners, one moving twice as fast as the other, the slow runner only reaches half way when the other reaches the end
// we can add in tweaks to make sure it gets to the second if there's two middle nodes

// Definition for singly-linked list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
// @param {ListNode} head
// @return {ListNode}

var middleNode = function (head) {
  let runner = head;
  let runner2 = head;
  while (runner2?.next) {
    runner = runner.next;
    runner2 = runner2.next.next;
  }
  // console.log(runner.val);
  return runner;
};

n5 = new ListNode(5);
n4 = new ListNode(4, n5);
n3 = new ListNode(3, n4);
n2 = new ListNode(2, n3);
n1 = new ListNode(1, n2);

middleNode(n1);
// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
