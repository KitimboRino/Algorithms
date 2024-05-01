/*
Definition: Finds the first character in a string that does not repeat
Input: A string, str
Output: The first non-repeating character in the string; null if all characters repeat

Steps:
1. Create an empty object called charCounter to store the count of each character in the string.
2. Iterate through each character in the string.
3. If the character already exists in charCounter, increment its count; otherwise, set its count to 1.
4. Iterate through the string again.
5. For each character, check its count in charCounter. If the count is 1, return the character.
6. If no non-repeating character is found, return null.
*/

function firstNonRepeat(str) {
    let charCounter = {};
    for (let i = 0; i < str.length; i++) {
      if (charCounter[str[i]]) {
        charCounter[str[i]]++;
      } else {
        charCounter[str[i]] = 1;
      }
    }
    for (let i = 0; i < str.length; i++) {
      if (charCounter[str[i]] === 1) {
        return str[i];
      }
    }
    return null;
  }
  
  // Example
  console.log(firstNonRepeat('hello')); // 'h'
  console.log(firstNonRepeat('hello world')); // 'h'
  console.log(firstNonRepeat('aabbc')); // 'c'
  console.log(firstNonRepeat('aabbcc')); // null  