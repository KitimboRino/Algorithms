/*
Routine: maxOfMinPairs
Input: An array of integers
Output: An integer representing the maximum sum of pairs of minimums

Steps:
1. Sort the input array in ascending order
2. Initialize a variable to store the maximum sum of pairs of minimums
3. Iterate through the sorted array
    - If the current index is even:
        -- Add the current number to the maximum sum of pairs of minimums
4. Return the maximum sum of pairs of minimums
*/

function maxOfMinPairs(nums){
    var sortedNums = nums.sort((a,b) => a-b);
    var maxSumOfPairs = sortedNums[0];
    for(var i = 1; i < sortedNums.length; i++){
        if(i % 2 === 0){
            maxSumOfPairs += sortedNums[i];
        }
    }
    return maxSumOfPairs;
}

// Example usage
console.log(maxOfMinPairs([1, 3, 2, 6, 5, 4])); // 9
console.log(maxOfMinPairs([1, 2, 3, 4, 5, 6, 7])); // 16
console.log(maxOfMinPairs([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 25
