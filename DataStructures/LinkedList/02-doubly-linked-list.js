// Node class is implemented for you, no need to look for bugs here!
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

  addToHead(val) {
    let node = new DoublyLinkedNode(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;
    // O(1) because of reference to head, it takes constant operation to add a node at head.
  }

  addToTail(val) {
    const node = new DoublyLinkedNode(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    // O(1) because of reference to tail, it takes constant operation to add a node at tail.
  }

  removeFromHead() {
    if (this.length === 0) return undefined;

    let removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
      this.head.prev = null;
      removed.next = null;
    }

    this.length--;
    return removed.value;

    // O(1) because of reference to head, it takes constant operation to remove a node at head.
  }

  removeFromTail() {
    if (this.length === 0) return undefined;

    let removed = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null;
    }

    this.length--;
    return removed.value;
    // O(1) because of reference to head, it takes constant operation to remove a node at tail.
  }

  peekAtHead() {
    if (this.length === 0) return undefined;
    return this.head.value;
    // Write your hypothesis on the time complexity of this method here
  }

  peekAtTail() {
    if (this.length === 0) return undefined;
    return this.tail.value;
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
