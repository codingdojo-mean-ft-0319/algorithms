class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class List {
  constructor(){
    this.head = null;
  }
  addFront(value){
    if (!(value instanceof Node)){
      value = new Node(value);
    }
    console.log(this.head);
    if (this.head){
      value.next = this.head;
      console.log(value.next);
    }
    this.head = value;
  }

  /**
   * Reverse the node sequence. Given an SList object, the .head property should point to the previously-last node, and the rest of the nodes should follow similarly from back to front.
   */
  reverse(){
    var current = this.head;
    var previous = null;
    var next = null;
    while(current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      console.log(`current is ${current ? current.value : current} and previous is ${previous.value}`);
    }
    this.head = previous;
  }

  isEmpty(){
    return this.head === null;
  }
  addBack(value){
    if(this.isEmpty()){
      return this.addFront(value);
    }
    if (!(value instanceof Node)){
      value = new Node(value);
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }
    return current.next = value;
  }

  traverse(callback) {
    let current = this.head;
    while(current){
      callback(current);
      current = current.next;
    }

    return this;
  }
  print(){
    this.traverse(node => console.log(node.value));
  }

  length(){
    let count = 0;
    this.traverse(() => count += 1);
    return count;
  }
}

const list = new List();
const values = [1,2,3,4,5,6,7,8,9,10];

// values.forEach(value => list.addBack(value));

list.addBack(11);
list.print();
list.reverse();
list.print();