class dNode{
  constructor(val){
      this.value = val;
      this.next = null;
      this.prev = null;
  }
}

// DLL Class
class DLL{
  constructor(){
      this.head = null;
      this.tail = null;
  }
  addToFront(val){
      let newNode = new dNode(val)
      newNode.next = this.head;
      if(this.head){
          this.head.prev = newNode;
      }
      else{
          this.tail = newNode;
      }
      this.head = newNode;
  }
  addToBack(val){
      let newNode = new dNode(val)
      newNode.prev = this.tail;
      if(this.tail){
          this.tail.next = newNode;
      }
      else{
          this.head = newNode;
      }
      this.tail = newNode;
  }
  removeFromFront(){
      if(!this.head){
          return null;
      }
      if(this.head===this.tail){
          this.head = null;
          this.tail = null;
          return null;
      }
      this.head = this.head.next;
      this.head.prev = null;
  }
  removeFromBack(){
      if(!this.tail){
          return null;
      }
      if(this.head===this.tail){
          this.head = null;
          this.tail = null;
          return null;
      }
      this.tail = this.tail.prev;
      this.tail.next = null;
  }
  reverse(){
    // check is list is empty (no head)
    // or just 1 value (head == tail)
    // if so, do nothing and return
    if(!this.head || this.head == this.tail) {
      return;
    }
    // start your runner at the head
    let runner = this.head;

    //loop until the node is null
    while(runner) {
      //destructure swap the previous and next node
      [[runner.next], [runner.prev]] = [[runner.prev], [runner.next]]
      //move on to the "next" node
      runner = runner.prev;
      
      // or temp swap
      // let temp = runner.next;
      // runner.next = runner.prev;
      // runner.prev = temp;
      // runner = temp
    }
    //destructure swap the head and tail nodes
    [[this.head], [this.tail]] = [[this.tail], [this.head]]

    // temp swap the head and tail positions
    // let temp = this.head;
    // this.head = this.tail;
    // this.tail = temp;
  }
  print(){
    let runner = this.head;
    let result = "";
    while(runner){
      result += runner.value + ", ";
      runner = runner.next;
    }
    console.log(result);
  }
}

let newDll = new DLL();
newDll.addToBack(5);
newDll.addToBack(2);
newDll.addToBack(3);
newDll.addToBack(6);
newDll.addToBack(4);
newDll.addToBack(1);
newDll.print();
newDll.reverse();
newDll.print();

