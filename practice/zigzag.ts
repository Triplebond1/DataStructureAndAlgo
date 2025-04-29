// The string "PAYPALISHIRING" is written in a zigzag pattern on a
//  given number of rows like this: (you may want to display this pattern in a fixed font for '
// better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

function zigZag(srray: string, sRow: number) {
  const sArray: string = srray;
  let rowFillers: number = 0;
  let middleNum: number = sRow - 2;

  let sortedZigZag: Array<Array<string>> = [];

  for (let i = 0; i < sArray.length; i++) {
    if (i < sRow) {
      const newArray: string[] = [sArray[i]];
      sortedZigZag.push(newArray);
      console.log(rowFillers);
      rowFillers++;
    } else if (rowFillers < sRow) {
      sortedZigZag[rowFillers].push(sArray[i]);

      rowFillers++;
    } else {
      if (rowFillers == sRow) {
        sortedZigZag[middleNum].push(sArray[i]);
        middleNum = middleNum - 1;
        if (middleNum == 0) {
          rowFillers = 0;
          middleNum = sRow - 2;
        }
      }
    }
  }
  let result:string[] = []
  return result.concat(...sortedZigZag)
}

console.log(zigZag("PAYPALISHIRING", 3));
