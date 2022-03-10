// Restate the problem
// a linked list represents a decimal number. the first node is 10^0 * val, the second 10^1 * val etc...
// add two such lists together, the resultant number is similar linked list

// Clarify
// guaranteed there are no leading 0s for these numbers
// size of a list is at least 1
// each node value is between 0 and 9

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Assumptions

// output is head node of linked list
// we traverse the two linked lists by using a runner for each one.
// the runners proceed at the same pace
// when one list ends we still need to continue with the other

// the output list will be equal or greater by one compared to the longer of the addative lists
// we need to track if the sum of two nodes is greater than 10

// may create nodes recursively in order to link next nodes
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

n2 = new ListNode(9);
n1 = new ListNode(9, n2);

nn1 = new ListNode(1);

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  result = nextNode(l1, l2, carry);
  console.log(result);
  return result;
};

var nextNode = function (l1, l2, carry) {
  let result = null;
  if (l1 || l2 || carry) {
    result = new ListNode();
    let sum = (l1 ? l1?.val : 0) + (l2 ? l2?.val : 0) + carry;
    sum > 9 ? (carry = 1) : (carry = 0);
    result.val = sum % 10;
    result.next = nextNode(l1?.next, l2?.next, carry);
  }
  return result;
};

addTwoNumbers(n1, nn1); //[0,0,1]
