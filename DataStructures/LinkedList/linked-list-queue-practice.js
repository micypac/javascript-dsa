// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
    return this.head;
  }

  listLength() {
    let count = 0;
    let curr = this.head;

    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
    // Implement in O(n) and in O(1) time complexity
  }

  sumOfNodes() {
    let sum = 0;
    let curr = this.head;

    while (curr) {
      sum += curr.value;
      curr = curr.next;
    }
    return sum;

    // O(n) because it will to go through each node and add its value to total sum.
  }

  averageValue() {
    let sum = this.sumOfNodes();
    let length = this.listLength();
    return sum / length;

    // O(n) by calling sumOfNodes and listLength methods.
  }

  findNthNode(n) {
    let length = this.listLength();
    if (n >= this.length) return undefined;

    let idx = 0;
    let curr = this.head;
    while (idx < n) {
      curr = curr.next;
      idx++;
    }

    return curr;
    // O(n) because it will traverse each index to reach the target. Worst case if n provided is the tail.
  }

  findMid() {
    let length = this.listLength();
    // round down to get mid value
    let mid = Math.floor((length - 1) / 2);

    let idx = 0;
    let curr = this.head;

    while (idx < mid) {
      curr = curr.next;
      idx++;
    }
    return curr;

    // O(n/2) but we ignore constant so O(n).
  }

  reverse() {
    const nodesArr = [];
    let curr = this.head;

    while (curr) {
      nodesArr.push(curr.value);
      curr = curr.next;
    }

    const result = new SinglyLinkedList();
    for (let i = nodesArr.length - 1; i >= 0; i--) {
      result.addToTail(nodesArr[i]);
    }

    return result;
    // O(2n) but simplified to O(n). First loop to get all node values and second loop to
    // create new nodes to create the new list.
  }

  reverseInPlace() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
    // O(n) by traversing the entire list and reversing the pointers between them.
  }
}

class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      //   return this.head;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    this.length++;
    return this.head;
  }

  findMid() {
    // round down to get mid value
    let mid = Math.floor((this.length - 1) / 2);

    let idx = 0;
    let curr = this.head;

    while (idx < mid) {
      curr = curr.next;
      idx++;
    }
    return curr;

    // O(n/2) but we ignore constant so O(n).
  }

  reverse() {
    const nodesArr = [];
    let curr = this.head;

    while (curr) {
      nodesArr.push(curr.value);
      curr = curr.next;
    }

    const result = new DoublyLinkedList();
    for (let i = nodesArr.length - 1; i >= 0; i--) {
      result.addToTail(nodesArr[i]);
    }

    return result;

    // O(2n) but simplified to O(n). First loop to get all node values and second loop to
    // create new nodes to create the new list.
  }

  reverseInPlace() {
    let prev = null;
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      curr.prev = next;
      prev = curr;
      curr = next;
    }

    // O(n) by traversing the entire list and reversing the pointers between them.
  }
}

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};
