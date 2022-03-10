// restate problem
// given a linked list of size s, remove the node n away from END of list
// n can be any position that exists in the list

// clarify
// the list cannot be empty
// the node to remove is definitely in the list
// the head node we return may not be the starting head node if we remove the first node

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

// assumptions
// (garbage collection is not out problem?)
// when we remove a node, we need to have a reference to the previous node so we can reset it's next property
// We want two runners, one that is ahead of the other by n nodes
// if we haven't moved the second runner yet and the first runner is null, we are removing the first node

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
n5 = new ListNode(5);
n4 = new ListNode(4, n5);
n3 = new ListNode(3, n4);
n2 = new ListNode(2, n3);
n1 = new ListNode(1, n2);

function removeNthFromEnd(head, n) {
  if (!head.next) {
    return null;
  }
  let runner = head;
  // move the runner forward n times
  // the runner2 will be n spaces behind when runner reaches the end
  for (i = 0; i < n; i++) {
    runner = runner.next;
  }
  // If runner is null at this point, we must be removing the first node
  if (!runner) {
    return head.next;
  }
  let runner2 = head;
  while (runner.next) {
    runner = runner.next;
    runner2 = runner2.next;
  }
  runner2.next = runner2.next.next;
  return head;
}
