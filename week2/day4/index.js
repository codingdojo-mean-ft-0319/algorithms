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

  /**
   * Given k, return the value that is ‘k’ nodes from the list’s end. If given (list,1) , return the list’s last value. If given (list,4) , return the value at the node that has exactly 3 nodes following it.
   */
  kToLast(k){
    //if k is 0 or negative
    //find the length of list
    //subtract length by k 
    if ( k <= 0){
      return null;
    }; 
    const position = this.length() - k;
    if( position < 0){
      return null;
    }
    console.log(`position is ${position}`);
    let current = this.head;
    for( let i = 0; i < position; i++){
      current = current.next;
      console.log(`this is current ${current.value}`);
    }
    return current;
  }

    kToLast2(k){
    //if k is 0 or negative
    //find the length of list
    //subtract length by k 
    if ( k <= 0){
      return null;
    }; 

    let runner = this.head;
    while(runner && k > 0){
      runner = runner.next;
      k--;
    }
    if( k > 0){
      return null;
    };
    let current = this.head;
    while(runner){
      current = current.next;
      console.log(`this is current ${current.value}`)
      runner = runner.next;
      console.log(`this is runner ${runner ? runner.value : runner}`)
    }
      return current.value;
  }

  /**
   * Return whether a list is a palindrome. String palindromes read the same front-to-back and back-to-front. Here, compare node values . N.B.: to be accurate in JavaScript, use === instead of == , since 1 == true == [1] == "1" .
   */

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

values.forEach(value => list.addBack(value));

list.addBack(11);
list.print();
// list.reverse();
list.print();
console.log(list.kToLast2(3));