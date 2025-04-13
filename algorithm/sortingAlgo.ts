function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // Optimization: Stop if already sorted
  }
  return arr;
}

function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.slice(0, -1).filter((x) => x <= pivot);
  console.log("left:", left, "pivot:", pivot);
  const right = arr.slice(0, -1).filter((x) => x > pivot);
  console.log("right:", right);
  console.log("arr:", arr);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

//  console.time("runtime");
//  console.log(quickSort(arrai));
// // //console.log(bubbleSort(arrai));
//  console.timeEnd("runtime");

// Function to perform Quick Sort
function quicSort(
  arr: number[],
  low: number = 0,
  high: number = arr.length - 1
): number[] {
  if (low < high) {
    // Find partition index
    const pivotIndex: number = partition(arr, low, high);

    // Recursively sort elements before and after partition
    quicSort(arr, low, pivotIndex - 1);
    quicSort(arr, pivotIndex + 1, high);
  }

  return arr;
}

// Helper function for Quick Sort to partition the array
function partition(arr: number[], low: number, high: number): number {
  const pivot: number = arr[high]; // Choose the last element as pivot
  let i: number = low - 1; // Index of smaller element

  for (let j: number = low; j < high; j++) {
    // If current element is smaller than or equal to pivot
    console.log("j value:", j, "arr[j]:", arr[j], "pivot:", pivot);
    if (arr[j] <= pivot) {
      i++; // Increment index of smaller element
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Place pivot in its correct position
  return i + 1; // Return pivot index
}

function quikSort(arr: number[]): number[] {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function quicSelect(arr: number[], k: number): number {
  if (arr.length === 1) return arr[0];
  const pivot: number = arr[0];
  console.log("pivot",pivot);
  const left: number[] = [];
  const right: number[] = [];
  const pivots: number [ ] =[]
  console.log("arr len", arr.length);
  pivots.push(pivot)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
      //console.log("left len", left.length);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
      //console.log("right len", right.length);
    }
  }

  if (k <= left.length) {
    return quicSelect(left, k);
  } else if (k === left.length + pivots.length) {
    return pivot;
  } else {
    return quicSelect(right, k - left.length - pivots.length);
  }

}

const sort = (arry: number[]): number[] => {
  if (arry.length <= 1) return arry;

  const pivot = arry[0];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 1; i < arry.length; i++) {
    if (arry[i] < pivot) {
      left.push(arry[i]);
    } else {
      right.push(arry[i]);
    }
  }

  return [...sort(left), pivot, ...sort(right)];
};

//   const pivot = arr[Math.floor(Math.random() * arr.length)];

//   const left = arr.filter((x) => x < pivot);
//   const right = arr.filter((x) => x > pivot);
//   const pivotCount = arr.length - left.length - right.length;

//   if (k < left.length) {
//     return quickSelect(left, k);
//   } else if (k < left.length + pivotCount) {
//     return pivot;
//   } else {
//     return quickSelect(right, k - left.length - pivotCount);
//   }
// }

function quickSelect(arr: number[], k: number): number {
  if (arr.length === 1) return arr[0];

  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const lows = arr.filter(x => x < pivot);
  const highs = arr.filter(x => x > pivot);
  const pivots = arr.filter(x => x === pivot);

  if (k <= lows.length) {
    return quickSelect(lows, k);
  } else if (k <= lows.length + pivots.length) {
    return pivot;
  } else {
    return quickSelect(highs, k - lows.length - pivots.length);
  }
}

function mergeSort(arr: number[]): number[] {
  // Base case: array with 0 or 1 elements is already sorted
  if (arr.length <= 1) return arr;

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // Merge the sorted halves
  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  // Merge while there are elements in both arrays
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      console.log("left[i]:", left[i], "right[j]:", right[j]);
      result.push(left[i]);
      i++;
    } else {
      console.log("left[i]:", left[i], "right[j]:", right[j]);
      result.push(right[j]);
      j++;
    }
  }

  // Push any remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

//const arrai: number[] = [38, 27, 43, 3, 9, 82, 10];
function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    // Shift elements of arr[0..i-1], that are greater than current
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];  // Shift
      j--;
    }

    arr[j + 1] = current; // Insert current
  }

  return arr;
}

function countingSort(arr: number[]): number[] {
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);
  const output: number[] = [];

  // Step 1: Count frequencies
  for (let num of arr) {
    count[num]++;
  }

  // Step 2: Build sorted output
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      output.push(i);
      count[i]--;
    }
  }

  return output;
}

// function bucketSort(arr: number[]): number[] {
//   if (arr.length === 0) return [];

//   const n = arr.length;
//   const buckets: number[][] = Array.from({ length: n }, () => []);

//   // Step 1: Distribute input elements into buckets
//   for (let num of arr) {
//     const index = Math.floor(num * n); // works well for [0, 1) values
//     buckets[index].push(num);
//   }

//   // Step 2: Sort individual buckets
//   for (let i = 0; i < n; i++) {
//     buckets[i].sort((a, b) => a - b); // Using built-in sort for simplicity
//   }

//   // Step 3: Concatenate all buckets
//   return buckets.flat();
// }

function getDigit(num: number, place: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num: number): number {
  return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums: number[]): number {
  return Math.max(...nums.map(digitCount));
}

// function radixSort(nums: number[]): number[] {
//   const maxDigitCount = mostDigits(nums);
  
//   for (let k = 0; k < maxDigitCount; k++) {
//     const buckets: number[][] = Array.from({ length: 10 }, () => []);
    
//     for (let num of nums) {
//       const digit = getDigit(num, k);
//       buckets[digit].push(num);
//     }
    
//     nums = buckets.flat();
//   }

//   return nums;
// }



const arrai: number[] = [38, 27, 43, 3, 9, 82, 10];

// Execute both sorts on a copy of the original array to avoid modifying it
const quickSorted: number[] = [...arrai]; // Create another copy
// console.log("Original Array (first 10 elements):", arrai.slice(0, 10) + "...");
// console.time("quick Sort Runtime");
// console.log("Quick Sort Result (first 10 elements):", quicSort(quickSorted))
// console.timeEnd("quick Sort Runtime");

console.time("quiksort");
console.log("quiksort Result:", mergeSort(quickSorted));
//console.log("quikselect Result:", quicSelect(quickSorted, 9));
console.timeEnd("quiksort");
