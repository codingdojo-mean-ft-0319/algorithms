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
      return current;
  }

  /**
   * Return whether a list is a palindrome. String palindromes read the same front-to-back and back-to-front. Here, compare node values . N.B.: to be accurate in JavaScript, use === instead of == , since 1 == true == [1] == "1" .
   */

  isEmpty(){
    return this.head === null;
  }
  /**
  In preparation for tomorrow, create a sequence of nodes that form a closed loop. Your functions first argument should signify how many nodes total, and the second should be which node number is pointed to by the last node. Give nodes sequential numbers as values, for clarity. Calling setupLoop(5, 3) should return a circular list of 1=>2=>3=>4=>5=>3=>4=>5=>3....
  */

  setupLoop(n) {
    const loopTo = this.kToLast2(n);
    if(loopTo === null){
      return loopTo;
    }
    let current = loopTo;
    while(current && current.next){
      current = current.next;
    }
    if(current === loopTo){
      return null;
    }
    current.next = loopTo;
    return this;

  }



  /**
   * Ben sends linked lists to Emma, but she doesn’t quite trust him. Is he trying to make her code spin infinitely? Given a linked list, determine whether it has a loop, and return a boolean accordingly.
   */

  hasLoop() {
    if(this.isEmpty()){
      return false;
    }
    let current = this.head;
    let runner = this.head.next;
    while(runner && runner.next){
      if( current === runner){
        return true;
      }
      current = current.next;
      runner = runner.next.next;
    }
    return false;

  }

  /**
   * Even better than finding where the loops start would be to just fix them. You will be given a potentially loopy list ; determine whether there is a loop, and if so, break it. Retain all nodes, in original order.
   */

  breakLoop() {
    if(!this.hasLoop()){
      return false;
    }
    let current = this.head;
    let runner = this.head.next;
    while(runner && runner.next){
      if(current === runner){
        console.log('runner and current are the same node ' + current.value);
        current = this.head;
        runner = runner.next;

        while(current.next !== runner.next) {
          current = current.next;
          runner = runner.next;
          console.log(`Testing next :: current is ${current.value} and runner is ${runner.value}`);
        }

        runner.next = null;
        return true;
      }
      
      current = current.next;
      runner = runner.next.next;

      console.log(`current is ${current.value} and runner is ${runner.value}`);
    }
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
    let count = 0;
    let current = this.head;
    while(current){
      callback(current);
      current = current.next;
      if (count++ > 20) {
        throw new Error(`loop? ${current.value}`);
      }
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
console.log(list.kToLast2(15));
list.setupLoop(3)
list.hasLoop();
list.breakLoop();
list.hasLoop();