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

let ll = new LinkedList();

let n4 = new Node(4, null);
let n3 = new Node(3, n4);
let n2 = new Node(2, n3);
let n1 = new Node(1, n2);
ll.head = n1;

function reverseLL(ll) {
  let runner = ll.head;
  let previous = null;

  while (runner) {
    console.log(runner.val);

    let temp = runner.next;
    runner.next = previous;
    previous = runner;
    runner = temp;
  }
  ll.head = previous;
}

reverseLL(ll);
console.log("head", ll.head);

function revLLrecursive(runner, previous = null) {
  if (runner == null) {
    return previous;
  }
  temp = runner.next;
  runner.next = previous;
  return revLLrecursive(temp, runner);
}
