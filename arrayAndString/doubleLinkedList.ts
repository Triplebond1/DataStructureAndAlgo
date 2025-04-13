class Nodei<T> {
  value: T;
  next: Nodei<T> | null = null;
  prev: Nodei<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class DoublyLinkedList<T> {
  head: Nodei<T> | null = null;
  tail: Nodei<T> | null = null;
  length: number = 0;

  // Methods: push, pop, shift, unshift, insert, remove, reverse, etc.

  push(value: T): this {
    const newNode = new Nodei(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }

    this.length++;
    return this;
  }

  pop(): Nodei<T> | undefined {
    if (!this.tail) return undefined;

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      if (this.tail) this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift(): Nodei<T> | undefined {
    if (!this.head) return undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      if (this.head) this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(value: T): this {
    const newNode = new Nodei(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      if (this.head) this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index: number): Nodei<T> | null {
    if (index < 0 || index >= this.length) return null;

    let current: Nodei<T>;
    if (index < this.length / 2) {
      current = this.head!;
      for (let i = 0; i < index; i++) {
        current = current.next!;
      }
    } else {
      current = this.tail!;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev!;
      }
    }

    return current;
  }

  set(index: number, value: T): boolean {
    const node = this.get(index);
    if (!node) return false;

    node.value = value;
    return true;
  }

  insert(index: number, value: T): boolean | DoublyLinkedList<T> {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Nodei(value);
    const current = this.get(index);

    if (current) {
      newNode.prev = current.prev;
      newNode.next = current;
      current.prev!.next = newNode;
      current.prev = newNode;
    }

    this.length++;
    return true;
  }

  remove(index: number): boolean {
    if (index < 0 || index >= this.length) return false;

    if (index === 0) {
      this.shift();
      return true;
    }
    if (index === this.length - 1) {
      this.pop();
      return true;
    }

    const current = this.get(index);

    if (current) {
      current.prev!.next = current.next;
      current.next!.prev = current.prev;

      current.prev = null;
      current.next = null;
    }

    this.length--;
    return true;
  }

  reverse(): void {
    let current = this.head;
    let temp = null;
  
    // Traverse the list and swap next and prev for each node
    while (current) {
      // Swap next and prev pointers
      temp = current.next;
      current.next = current.prev;
      current.prev = temp;
  
      // Move to the next node (which is now the previous node)
      current = current.prev;
    }
  
    // After the loop, swap head and tail
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }
  
  // Forward traversal from head to tail
traverseForward(): void {
  let current = this.head;
  while (current) {
    console.log(current.value);  // Or do any operation on the node
    current = current.next;
  }
}

// Backward traversal from tail to head
traverseBackward(): void {
  let current = this.tail;
  while (current) {
    console.log(current.value);  // Or do any operation on the node
    current = current.prev;
  }
}

clear(): void {
  let current = this.head;
  
  // Traverse through the list and remove each node
  while (current) {
    let nextNode = current.next;
    current.next = null;
    current.prev = null;
    current = nextNode;
  }

  // Reset head and tail to null
  this.head = null;
  this.tail = null;
  }

   // Merge Sort
   mergeSort(head: Nodei<T> | null): Nodei<T> | null {
    if (!head || !head.next) return head; // Base case: if list is empty or has one node

    // Step 1: Split the list
    let middle = this.getMiddle(head);
    let nextOfMiddle = middle.next;
    middle.next = null; // Split the list

    // Step 2: Recursively sort both halves
    let left = this.mergeSort(head);
    let right = this.mergeSort(nextOfMiddle);

    // Step 3: Merge the sorted halves
    return this.merge(left, right);
  }

  // Helper method to get the middle node
  getMiddle(head: Nodei<T>): Nodei<T> {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next!;
      fast = fast.next!.next;
    }
    return slow;
  }

  // Helper method to merge two sorted lists
  merge(left: Nodei<T> | null, right: Nodei<T> | null): Nodei<T> | null {
    if (!left) return right;
    if (!right) return left;

    // Base case: compare values
    if (left.value < right.value) {
      left.next = this.merge(left.next, right);
      left.next!.prev = left;
      left.prev = null;
      return left;
    } else {
      right.next = this.merge(left, right.next);
      right.next!.prev = right;
      right.prev = null;
      return right;
    }
  }
  
}

const lisst = new DoublyLinkedList<number>();
lisst.push(1);
lisst.push(2);
lisst.push(3);

console.log(lisst.pop()?.value); // 3
console.log(lisst.pop()?.value); // 2
console.log(lisst.pop()?.value); // 1
console.log(lisst.pop()); // undefined

const lissst = new DoublyLinkedList<number>();
lissst.push(10);
lissst.push(20);
lissst.push(30);
lissst.push(40);

console.log(lissst.insert(2, 25)); // true
console.log(lissst.get(2)?.value); // 25
console.log(lissst.get(3)?.value); // 30
