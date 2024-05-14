/*
Routine: subArraySum
Input: nums: Array of integers, sum: integer
Output: boolean
Description: Given an array of integers, return true if there is a subarray that sums to the given sum.

Steps:
1. Loop through the array from 0 to n-1
2. For each element, start a new loop from i+1 to n
3. Calculate the sum of the elements from i to j
4. If the sum is equal to the given sum, return true
5. If the sum is greater than the given sum, break the loop
6. If the loop completes without finding a subarray, return false
*/

function subArraySum(nums, sum) {
    let currentSum, i, j;
    for (i = 0; i < nums.length; i++) {
        currentSum = nums[i];
        j = i + 1;
        while (j <= nums.length){
            if (currentSum === sum) {
                return true;
            }
            if (currentSum > sum || j === nums.length) {
                break;
            }
            currentSum = currentSum + nums[j];
            j++;
        }
    }
    return false;
}

//Example usecase
console.log(subArraySum([1, 4, 20, 3, 10, 5], 33)); // true
console.log(subArraySum([1, 4, 20, 3, 10, 5], 100)); // false
console.log(subArraySum([1, 4, 20, 3, 10, 5], 33)); // true