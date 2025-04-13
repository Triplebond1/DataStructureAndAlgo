class MaxHeap {
    private heap: number[];  // Array to store heap

    constructor() {
        this.heap = [];
    }

    private parent(i: number): number {
        return Math.floor((i - 1) / 2);
    }

    private leftChild(i: number): number {
        return 2 * i + 1;
    }

    private rightChild(i: number): number {
        return 2 * i + 2;
    }

    insert(key: number): void {
        // Add new key to end of heap
        this.heap.push(key);
        let i: number = this.heap.length - 1;

        // Fix heap property by bubbling up
        while (i > 0 && this.heap[this.parent(i)] < this.heap[i]) {
            // Swap with parent
            [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];
            i = this.parent(i);
        }
    }

    printHeap(): void {
        console.log("Max-Heap array:", this.heap);
        // Optional: Print as tree (for small heaps)
        const printTree = (arr: number[], index: number = 0, level: number = 0): void => {
            if (index >= arr.length) return;
            console.log("  ".repeat(level) + arr[index].toString());
            printTree(arr, this.leftChild(index), level + 1);  // Left
            printTree(arr, this.rightChild(index), level + 1);  // Right
        };

        console.log("Tree representation:");
        printTree(this.heap);
    }
}

// Usage example
const heap: MaxHeap = new MaxHeap();
const keys: number[] = [4, 10, 3, 5, 1];

keys.forEach(key => {
    console.log(`\nInserting ${key}`);
    heap.insert(key);
    heap.printHeap();
});