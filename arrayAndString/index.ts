let array = [10, 20, 30];

//traversal visiting each element in the array
function traverseArray(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//INSERTION

array.unshift(2); // Add value to the beginning of the array
console.log("unshift", array);

array.push(3); // Add value to the end of the array
console.log("push", array);

array.splice(2, 0, 25); // Add value at the specified index, and Pushes elements after index 2 to the right
console.log("splice", array);

//DELETION

array.pop(); // remove from the end
console.log("pop", array);

array.shift(); // remove element from the beginning
console.log("shift", array);

array.splice(1, 1); // remove from specify index
console.log("splice delete", array);

//SEARCHING FOR VALUE

const includes = array.includes(2); // true or false
console.log("includes:", includes);
const indexof = array.indexOf(30);
console.log("index of", indexof);

//REVERSING AN ARRAY

const reverse = array.reverse();
console.log("reverse array", reverse);

const copyandreverse = array.slice().reverse(); // copy first then reverse
console.log("copy then reverse", copyandreverse);

let messages: any[] = [];

function messageNotification(msg: any) {

  if (msg && messages.length < 5) {
     messages.unshift(msg);
    console.log(messages);
    return messages;
  } else if (msg && messages.length >= 5) {
    messages.splice(4);
      messages.unshift(msg);
      console.log(messages)
    return messages;
  } 
  console.log(messages);
  return messages;
}

function mesgNotification(msg: any) {
    if (msg) {
      messages.unshift(msg);         // add to the front
      if (messages.length > 5) {
        messages.length = 5;         // keep only 5 latest
      }
    }
    console.log(messages);
    return messages;
  }
  

messageNotification(6)