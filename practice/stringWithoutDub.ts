// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.


//brute force
function longestSubStringWithoutDublicate(arr: string) {
  const spliAr = arr;
  const subString: string[] = [];
  const allSubStrings: string[] = [];
  let len = 0;

  for (let i = 0; i < spliAr.length; i++) {
    subString.push(spliAr[i]);
      for (let j = i + 1; j <=spliAr.length; j++) {
        if (subString.includes(spliAr[j])) {
            const joinSub = subString.join('')
            allSubStrings.push(joinSub)
            subString.length = 0
            break;
        } else{
          subString.push(spliAr[j])
          if (j === spliAr.length) {
            const joinSub = subString.join('')
            allSubStrings.push(joinSub)
            subString.length = 0
          }
            
        } 
      
    }
  }
  let i = 0
  let j = 0
  while (i < allSubStrings.length) {
    if (allSubStrings[i].length > len) {
      len = allSubStrings[i].length 
      j = i
    }
    i++
  }
  console.log(allSubStrings)
  return allSubStrings[j];
}

console.log(longestSubStringWithoutDublicate(""));


function longeestSubStringWithoutDuplicate(s: string): string {
  let set = new Set<string>();
  let left = 0;
  let maxLength = 0;
  let start = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      start = left;
    }
  }

  return s.slice(start, start + maxLength);
}

function longestSubStringWithoutDuplicate(s: string): string {
  if (s.length === 0) return "";

  let longest = "";
  
  for (let i = 0; i < s.length; i++) {
    const seen = new Set<string>();
    let current = "";

    for (let j = i; j < s.length; j++) {
      const char = s[j];
      if (seen.has(char)) break;

      seen.add(char);
      current += char;
    }

    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
}

console.log(longestSubStringWithoutDuplicate("abcabcbb")); // Output: "abc"
console.log(longestSubStringWithoutDuplicate("bbbbb")); // Output: "b"