const arr: any[] = [1, 2, 2, 4, "3", "r"];
const arry: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// constant time O(1)
const constantTime = (arr: any[]) => {
  console.log(arr[1]);
};

//linearTime O(n)
const linearTime = (arr: any[]) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

// logarithmic time O(logn) for sorted array
const logarithmTime = (arr: any[], target: any) => {
  let left = 0;
  let right = arr.length - 1;
  console.log("right value:", right);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(arr[mid]);
    if (arr[mid] === target) return console.log(arr[mid]);
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
};

//quadratic double loop over each n O(n^2)
const quadraticTime = (arr: any[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
};

//recursive factorial O(n)
const recursiveFactorial: any = (arr: number) => {
  
  if (arr < 1) return console.log(1);
  const cal = arr * recursiveFactorial(arr - 1)
  console.log(cal)
 return cal;
};

//constant time O(1)
const cont = (arr: any[]) => {
  for (let i = 0; i < Math.min(3, arr.length); i++) {
    console.log(arr[i]);
  }
};

//O(nlogn)
const weirdLoop = (n: number) => {
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++) {
      console.log(i, j)
    }

  }

}

const weidLoop = (n: number[]) => {
  for (let i = 0; i < n.length; i++){
    for (let j = 0; j < n.length; j++) {
      console.log(n[i], n[j])
    }
  }
}

const widLoop = (n: number[]) => {
  for (let i = 0; i < n.length; i++){
    for (let j = i + 1; j < n.length; j++) {
      console.log(i, j)
    }
  }
}
//linear logarithm
const logLinear:any = (arr:number[]) => {
  if (arr.length < 1) return  arr
  const mid = Math.floor(arr.length / 2);
  const left = logLinear(arr.slice(0, mid))
  console.log("left:", left)
  // const right = logLinear(arr.slice(mid))
  // console.log("right", right)
  // return console.log("left:", left, "right:",right)
}

const logAllFactor = (n:number) => {
  for (let i = 1; i * i <= n; i++){
    if (n % i === 0) {
      console.log(i);
      if (i !== n / i) {
        console.log(n/i)
      }
    }
  }
}


let s = "hello";
console.log(s[1]); // => 'e'




//execute
console.time("runtime");
//constantTime(arr)
//linearTime(arr);
//logarithmTime(arry, 10);
//quadraticTime(arr)
//cont(arr)
//recursiveFactorial(10)
//logLinear(arry)
//weirdLoop(10)
//weidLoop(arry)
//widLoop(arry)
//logAllFactor(10)
console.timeEnd("runtime")
//console.log("array length:", arr.length);
