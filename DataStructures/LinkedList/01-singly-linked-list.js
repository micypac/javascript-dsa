// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const node = new SinglyLinkedNode(val);
    if (this.length === 0) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;

    // Time complexity is O(1) because there's a constant number of operations when adding at head.
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);

    if (this.length === 0) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr) {
        if (curr.next === null) break;
        curr = curr.next;
      }
      curr.next = newNode;
    }

    this.length++;
    return this;
    // Time complexity is O(n) because the operation will have to traverse the
    // entire list to add new node at the end of the list.
  }

  removeFromHead() {
    if (!this.head) return undefined;
    let removed = this.head;
    this.head = removed.next;
    this.length--;
    return removed;

    // Time complexity is O(1) because of constant number of operations to remove node at head.
  }

  removeFromTail() {
    if (!this.head) return undefined;

    let removed;
    if (this.length === 1) {
      removed = this.head;
      this.head = null;
    } else {
      let curr = this.head;

      while (curr) {
        if (curr.next.next === null) break;
        curr = curr.next;
      }
      removed = curr.next;
      curr.next = null;
    }
    this.length--;
    return removed;

    // Time complexity is O(n) because the operation will have to traverse the
    // entire list to remove node at the end of the list.
  }

  peekAtHead() {
    if (!this.head) return undefined;
    else return this.head.value;
    // O(1). The reference to head is constant operation.
  }

  print() {
    if (this.length === 0) return;
    let curr = this.head;
    while (curr) {
      //   process.stdout.write(`${curr.value} -> `);
      console.log(curr.value);
      curr = curr.next;
    }
    // O(n) because it will traverse to each node to print its value.
  }
}

const ll = new SinglyLinkedList();
ll.addToTail("B");
ll.addToTail("C");
ll.addToTail("D");
ll.addToHead("A");
ll.print();

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
