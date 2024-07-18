/*
Routine: zerosToEnd
Input: Array of numbers
Output: Array of numbers with all zeros moved to the end

Steps:
1. Create a variable to keep track of the position to insert non-zero elements
2. Iterate through the input array
3. If the current element is not zero, insert it at the position from step 1 and increment the position
4. After iterating through the array, fill the rest of the array with zeros
5. Return the modified array with zeros moved to the end
*/

function zerosToEnd(array) {
  let insertPosition = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[insertPosition++] = array[i];
    }
  }
  while (insertPosition < array.length) {
    array[insertPosition++] = 0;
  }
  return array;
}

// Example usage
console.log(zerosToEnd([0, 3, 0, 2, 0, 0, 1, 0, 0])); // [3, 2, 1, 0, 0, 0, 0, 0, 0]
console.log(zerosToEnd([0, 0, 0, 0, 0, 0, 0, 0, 0])); // [0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log(zerosToEnd([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(zerosToEnd([0, 0, 0, 0, 0, 0, 0, 0, 1])); // [1, 0, 0, 0, 0, 0, 0, 0, 0]
