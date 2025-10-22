// // datbase structure that contains head, tail and length property.
// // it consist of node, each node has a value and points(pointer) to another node that may have value or null.
// // (Head) 4=>6=>9=>(Tail) 3=>null  length= 4
// //Linked list doent have index. it is just connected via nodes with next pointer. random acess is not allowed.

const { timeStamp } = require("console");

// //Array has indexed in order, insertion and deletion is expensive can be qiockly acessed with specific index.
// // push: this function should accept value, create a new node using this

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// class Singlelinkedlist {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
// //   }
// //   push(val) {
// //     const newval = new Node(val);
// //     if (!this.head) {
// //       this.head = newval;
// //       this.tail = this.head;
// // //     } else
// // //   }
// // // }

// // let first= new Node("first")
// // first.next= new Node("second")
// // first.next.next= new Node("third ")
// // first.next.next.next= new Node ("fourth")

// // const list = new Singlelinkedlist();
// // list.push("hello world");
// // console.log(list)

//looking for a value or a index it is o(n)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Linkedlist {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop{
if(!this.head) return undefined
let pre =this.head
let temp= this.head
while(temp.next){
  pre= temp
  temp= temp.next
  
}
this.tail= pre
this.tail.next= null
this.length--
  }


let mylinkedlist = new Linkedlist(4);
mylinkedlist.push(7);



