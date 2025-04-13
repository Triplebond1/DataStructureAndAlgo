class HashTable {
    private data: Array<[string, any][]>;
  
    constructor(size: number = 53) {
      this.data = new Array(size);
    }
  
    private hash(key: string): number {
      let total = 0;
      const PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        const char = key[i];
        total = (total * PRIME + char.charCodeAt(0)) % this.data.length;
      }
      return total;
    }
  
    set(key: string, value: any): void {
      const index = this.hash(key);
      if (!this.data[index]) {
        this.data[index] = [];
      }
      this.data[index].push([key, value]);
    }
  
    get(key: string): any {
      const index = this.hash(key);
      const bucket = this.data[index];
      if (bucket) {
        for (const [k, v] of bucket) {
          if (k === key) return v;
        }
      }
      return undefined;
    }
}
  
function countString(text: string): number {
    let count = 0
    const noSpace = text.split(" ").join('')
    console.log("nosapce:", noSpace)
    for (let i = 0; i < noSpace.length; i++)
    {
         count++
    }
    console.log(count)
    return count
}

countString("adebisi olayinka")

const ht = new HashTable();
ht.set("dog", "barks");
ht.set("cat", "meows");
console.log(ht.get("dog")); // "barks"

  