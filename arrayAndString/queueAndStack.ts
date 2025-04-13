// Why Stack is Useful:
// Undo/Redo operations: Used in text editors and graphics programs to allow
//  users to undo or redo actions in the reverse order they occurred.

// Expression evaluation: Used in compilers for evaluating mathematical
// expressions or parsing syntax.

// Function call management: The call stack in programming keeps track
// of function calls and ensures that the most recent function call is executed first.
//This is the basic principle of a stack, also known as Last In, First Out (LIFO).

class Stack<T> {
  private items: T[] = [];

  // Push an item to the top of the stack
  push(item: T): void {
    this.items.push(item);
  }

  // Pop an item from the top of the stack
  pop(): T | undefined {
    return this.items.pop();
  }

  // Get the top item without removing it
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size(): number {
    return this.items.length;
  }

  // Print the stack (for testing)
  print(): void {
    console.log(this.items);
  }
}

//   Why Queue is Useful:
//   Task scheduling: In operating systems, queues are used to schedule
// tasks where the first task that arrives is the first one to be executed.

//   Breadth-first search: In graph algorithms, a queue is used to
//  explore all the nodes level by level.

//   Data buffers: In networking and streaming, queues are used to
//  store and process data in the order it was received.
//Imagine a line at a ticket counter. The person at the front of the line gets served first.
//  This is the basic principle of a queue, also known as First In, First Out (FIFO).
//   Queues are used in various applications, including task scheduling,
//   breadth-first search in graphs, and managing data buffers in networking.

class Queue<T> {
  private items: T[] = [];

  // Add an item to the queue
  enqueue(item: T): void {
    this.items.push(item);
  }

  // Remove an item from the front of the queue
  dequeue(): T | undefined {
    return this.items.shift();
  }

  // Get the front item without removing it
  peek(): T | undefined {
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size(): number {
    return this.items.length;
  }

  // Print the queue (for testing)
  print(): void {
    console.log(this.items);
  }
}


class StackNode<T> {
  value: T;
  next: StackNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class StackK<T> {
  private top: StackNode<T> | null = null;
  private length: number = 0;

  push(value: T): void {
    const newNode = new StackNode(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop(): T | undefined {
    if (!this.top) return undefined;
    const removed = this.top;
    this.top = this.top.next;
    this.length--;
    return removed.value;
  }

  peek(): T | null {
    return this.top ? this.top.value : null;
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}


class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class Queuei<T> {
  private front: QueueNode<T> | null = null;
  private rear: QueueNode<T> | null = null;
  private length: number = 0;

  enqueue(value: T): void {
    const newNode = new QueueNode(value);
    if (!this.rear) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
  }

  dequeue(): T | undefined {
    if (!this.front) return undefined;
    const removed = this.front;
    this.front = this.front.next;
    if (!this.front) this.rear = null; // Queue is now empty
    this.length--;
    return removed.value;
  }

  peek(): T | null {
    return this.front ? this.front.value : null;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  size(): number {
    return this.length;
  }
}


