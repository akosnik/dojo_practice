//today we will be finding the min and max node and second to last

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToFront(value) {
        var new_node = new ListNode(value);

        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }
    addToBack(value) {
        var new_node = new ListNode(value);
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }
    contains(target) {
        var runner = this.head;

        while (runner != null) {
            if (runner.value == target) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    display() {
        if (this.head == null) {
            return null;
        }
        var values = this.head.value;
        var runner = this.head.next;

        while (runner != null) {
            values += " - " + runner.value;
            runner = runner.next;
        }
        return values;
    }



    // Use findMinNode() to find the node in the linked list with the lowest value
    // Return the node ITSELF, not its value
    // If you find two or more nodes tied for that value, return the first one you find
    findMinNode() {


    }

    // Use findMaxNode() to find the node in the linked list with the highest value
    // Return the node ITSELF, not its value
    // if you find two or more nodes tied for that value, return the first one you find
    findMaxNode() {
        max = null
        if (this.head == null) {
            return undefined;
        }
        runner = this.head;
        max = this.head;
        while (runner != null) {
            if (runner.value > max.value) {
                max = runner;
            }
            runner = runner.next;
        }
    }

    // Use secondToLast() to return the VALUE of the second-to-last node in the linked list
    // HINTS: You could do this with or without a tail.  Choose whichever (:
    // Edge Case: What should you do if the list has less than two nodes?
    secondToLast() {
        myLL = this
        if (myLL.head == null || myLL.head.next == null) {
            return undefined
        }
        s2l = myLL.head
        runner = myLL.head
        while (runner.next != null) {
            if (runner == myLL.last) {
                return runner
            }
            runner = runner.next
        }
    }
}


var new_sll = new SinglyLinkedList();
new_sll.addToBack(52);
new_sll.addToBack(32);
new_sll.addToBack(88);
new_sll.addToBack(12);
new_sll.addToBack(18);
new_sll.addToBack(22);
new_sll.addToBack(32);
console.log(new_sll.display());

console.log(new_sll.findMinNode())
console.log(new_sll.findMaxNode())
console.log(new_sll.secondToLast())