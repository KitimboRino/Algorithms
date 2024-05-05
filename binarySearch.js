/* pseudo code
 Routine: binarySearch
 Input: Array of size n, value to find
 Output: Index of value in array. -1 if value is not found
 
Steps:
  first = 0
  last = n-1
  mid = (first+last)/2
  index = -1;
  index to return
  while (index==-1 && first<=last)
  if (value < array[mid])
  last = mid-1
  search in left sub-array
  else if (value > array[mid])
  first = mid+1
  search in right sub-array
  else index = mid
  value found
  return index 
*/

function binarySearch(array, value) {
  let first = 0;
  let last = array.length - 1;
  let index = -1;

  while (index === -1 && first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (value < array[mid]) {
      last = mid - 1;
    } else if (value > array[mid]) {
      first = mid + 1;
    } else {
      index = mid;
    }
  }
  return index;
}

// Example usage
let array = [4, 10, 25, 40, 54, 78, 82, 85, 100];
console.log(binarySearch(array, 82)); // Expected output: 6
console.log(binarySearch(array, 25)); // Expected output: 2
console.log(binarySearch(array, 100)); // Expected output: 8
console.log(binarySearch(array, 50)); // Expected output: -1 (value not found)
  