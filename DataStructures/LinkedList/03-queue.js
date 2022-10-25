const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    const node = new SinglyLinkedNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this.length;

    // O(1) because of reference to tail, it takes constant time to enqueue node.
  }

  dequeue() {
    // Remove node from front of queue (linked list)
    if (!this.head) return null;

    let removed = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
    }

    this.length--;

    return removed.value;

    // O(1) because of reference to head, it takes constant time to dequeue node.
  }
}

module.exports = {
  Queue,
  SinglyLinkedNode,
};
