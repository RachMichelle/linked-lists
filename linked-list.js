/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

 
// get node at specified index (vs getAt-retrieves node val)

  getNode(idx){
    let current = this.head;
    if (idx >= this.length || idx < 0) {
      throw new Error("Index does not exist")
    }
    for (let i = 1; i <= idx; i++) {
      current = current.next;

    }
    return current;
  }

 /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      throw new Error("No values in list")
    }
    let val = this.getAt(this.length-1);
    let prevNode= this.getNode(this.length-2)
   
    this.length -= 1;
    this.tail = prevNode;
    this.tail.next=null;
    
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error("No values in list");
    }
    let val = this.getAt(0);
    this.length -= 1;
    this.head=this.head.next;
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Index does not exist")
    }
    let node = this.getNode(idx)
    let val=node.val.val;
    return val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Index does not exist")
    }
    let newNode= new Node(val);
    let prevNode= this.getNode(idx-1);
    let currentAtIdx= this.getNode(idx);

    newNode.next=currentAtIdx.next;
    prevNode.next=newNode;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Index does not exist")
    }
    let newNode= new Node(val);
    let currentAtIdx = this.getNode(idx);
    let prevNode = this.getNode(idx-1);

    newNode.next=currentAtIdx;
    prevNode.next=newNode;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Index does not exist")
    }
    if (idx === this.length-1){
      this.pop()
    }
    if(idx === 0){
      this.shift()
    }

    let prevNode= this.getNode(idx-1)
    let atIdx=this.getNode(idx)

    prevNode.next=atIdx.next;
  
    this.length -= 1

    return atIdx.val.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }
    let total = 0;
    for (let i = 0; i < this.length; i++) {
      let num = this.getAt(i);
      total += num;
    }
    let avg = total / this.length;
    return avg;
  }

}

// module.exports = LinkedList;


// node for doubly linked list

class DLLNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  // get node at specified index (vs getAt-retrieves node val)

  getNode(idx){
    let current = this.head;
    if (idx >= this.length || idx < 0) {
      throw new Error("Index does not exist")
    }
    for (let i = 1; i <= idx; i++) {
      current = current.next;

    }
    return current;
  }

 /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new DLLNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev=this.tail;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new DLLNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev=newNode;
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      throw new Error("No values in list")
    }
    let val = this.getAt(this.length-1);
    let newLast= this.getNode(this.length-2)
   
    this.length -= 1;
    this.tail = newLast;
    this.tail.next=null;
    
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      throw new Error("No values in list");
    }
    let val = this.getAt(0);
    this.length -= 1;
    this.head.next.prev=null;
    this.head=this.head.next;
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Index does not exist")
    }
    let node = this.getNode(idx)
    let val=node.val.val;
    return val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Index does not exist")
    }
    let newNode= new DLLNode(val);
    newNode.prev = this.getNode(idx-1)
    let currentAtIdx= this.getNode(idx);

    newNode.next=currentAtIdx.next;
    newNode.prev.next=newNode;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Index does not exist")
    }
    let newNode= new DLLNode(val);
    newNode.prev= this.getNode(idx-1)
    let currentAtIdx = this.getNode(idx);

    newNode.next=currentAtIdx;
    newNode.prev.next=newNode;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Index does not exist")
    }
    if (idx === this.length-1){
      this.pop()
    }
    if(idx === 0){
      this.shift()
    }

    let atIdx=this.getNode(idx)

    atIdx.prev.next=atIdx.next;
  
    this.length -= 1

    return atIdx.val.val;
  }
}