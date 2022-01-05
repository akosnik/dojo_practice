class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

function reverseList(head) {
  let runner = head;
  let rvList = new LinkedList();
  if (head == null) {
    return rvList;
  }
  let prevNode = new Node(head.val);
  while (runner.next != null) {
    node = new Node(runner.next.val, prevNode);
    prevNode = node;
    runner = runner.next;
  }
  rvList.head = prevNode;
  return rvList;
}
