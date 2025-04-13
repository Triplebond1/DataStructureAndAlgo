function deepSum(arr: any[]): number {
  let sum = 0;
  console.log("sum", sum);
  for (let el of arr) {
    if (Array.isArray(el)) {
      console.log("el", el);
      console.log("sum", sum);
      sum += deepSum(el); // recursive call
    } else {
      console.log("sum", sum);
      sum += el;
    }
  }

  return sum;
}

//console.log(deepSum([1, [2, [3, 4]], 5])); // Output: 15

//sum of even number in an array
function sumOfEven(arr: number[], t: boolean = true): number {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEven += arr[i];
    } else {
      sumOdd += arr[i];
    }
  }
  if (t == true) {
    return sumEven;
  } else {
    return sumOdd;
  }
}

function sumUsingWhile(arr: number[]): number {
    let sum = 0;
    let i = 0;
    while (arr.length > i) {
        sum += arr[i];
        i++;
    }
    return sum;
}

function reversing(arr: number[]): number[] {
    let rever = []
    for (let i = arr.length-1; i >= 0; i--){
        rever.push(arr[i])
    } 
    return rever
}
const fathia: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];

console.log(sumOfEven(fathia, false));
console.log(reversing(fathia))
console.log(sumUsingWhile(fathia))