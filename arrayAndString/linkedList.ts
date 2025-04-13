// Define the node structure
class NODEI<T> {
    value: T;
    next: NODEI<T> | null;
  
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Define the linked list
  class SinglyLinkedList<T> {
    head: NODEI<T> | null = null;
    tail: NODEI<T> | null = null;
    length: number = 0;
  
    // Add to the end
    push(value: T): this {
      const newNode = new NODEI(value);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        if (this.tail) this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.length++;
      return this;
    }
  
    // Remove from end
    pop(): NODEI<T> | undefined {
      if (!this.head) return undefined;
  
      let current = this.head;
      let newTail = current;
  
      while (current.next) {
        newTail = current;
        current = current.next;
      }
  
      newTail.next = null;
      this.tail = newTail;
      this.length--;
  
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
  
      return current;
    }
  
    // Remove from start
    shift(): NODEI<T> | undefined {
      if (!this.head) return undefined;
  
      const oldHead = this.head;
      this.head = oldHead.next;
      this.length--;
  
      if (this.length === 0) {
        this.tail = null;
      }
  
      return oldHead;
    }
  
    // Add to start
    unshift(value: T): this {
      const newNode = new NODEI(value);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
  
      this.length++;
      return this;
    }
  
    // Print all values
    traverse(): void {
      let current = this.head;
      const values: T[] = [];
  
      while (current) {
        values.push(current.value);
        current = current.next;
      }
  
      console.log(values);
    }

    get(index: number): NODEI<T> | null {
      if (index < 0 || index >= this.length) return null;
    
      let counter = 0;
      let current = this.head;
    
      while (counter < index) {
        if (current) current = current.next;
        counter++;
      }
    
      return current;
    }

    set(index: number, value: T): boolean {
      const foundNode = this.get(index);
      if (foundNode) {
        foundNode.value = value;
        return true;
      }
      return false;
    }
    
    insert(index: number, value: T): boolean {
      if (index < 0 || index > this.length) return false;
    
      if (index === 0) {
        this.unshift(value);
        return true;
      }
    
      if (index === this.length) {
        this.push(value);
        return true;
      }
    
      const prev = this.get(index - 1);
      if (!prev) return false;
    
      const newNode = new NODEI(value);
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
    
      return true;
    }

    print(): T[] {
      const values: T[] = [];
      let current = this.head;
  
      while (current) {
        values.push(current.value);
        current = current.next;
      }
  
      return values;
    }
    
    remove(index: number): NODEI<T> | null | undefined {
      if (index < 0 || index >= this.length) return null;
    
      if (index === 0) return this.shift();
    
      if (index === this.length - 1) return this.pop();
    
      const prev = this.get(index - 1);
      if (!prev || !prev.next) return null;
    
      const removedNode = prev.next;
      prev.next = removedNode.next;
      this.length--;
    
      return removedNode;
    }

    reverse(): SinglyLinkedList<T> {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
    
      let prev = null;
      let next: NODEI<T> | null = null;
    
      while (node) {
        next = node.next;      // save next
        node.next = prev;      // reverse pointer
        prev = node;           // move prev forward
        node = next;           // move to next node
      }
    
      return this;
    }
    
}
  
const list = new SinglyLinkedList<number>();
list.push(1).push(2).push(3).push(4);

list.remove(2); // Removes 3
console.log(list.print()); // [1, 2, 4]
list.remove(0); // Removes 1
console.log(list.print()); // [2, 4]

list.reverse();
console.log(list.print()); // [4, 3, 2, 1]
  
