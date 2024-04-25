/*
Routine: Majority Element
Input: Array of integers
Output: The majority element in the input array, if it exists.


Sort the input array in ascending order.
Reteurn the element at the index Math.floor(nums.length/2), as it will be the majority element.
*/

function majorityElement(nums) {
    var sortedNums = nums.sort((a, b) => a - b);
    return sortedNums[Math.floor(nums.length/2)];
}

// Example
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2