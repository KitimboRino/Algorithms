/*
Routine: missingInUnsorted
Input: Array of integers, lower bound, upper bound
Output: Integer that is missing in the array that is within the range of lower bound and upper bound

Steps:
1. Initialize a variable to store the sum of the integers in the array
2. Iterate through the array to find the sum of the integers
3. Find the sum of the integers in the range
4. Calculate the theoretical sum of the integers in the range
5. Return the difference between the theoretical sum and the sum of the integers in the array
*/

function missingInUnsorted(arr, lowerBound, upperBound) {
    // Iterate through array to find the sum of the numbers
    let sumOfItegers = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfItegers += arr[i];
    }

    // Find the sum of the numbers in the range
    upperLimitSum = (upperBound * (upperBound + 1)) / 2;
    lowerLimitSum = (lowerBound * (lowerBound - 1)) / 2;

    theoreticalSum = upperLimitSum - lowerLimitSum;

    return theoreticalSum - sumOfItegers;
}

// Example cases
console.log(missingInUnsorted([1, 2, 3, 5], 1, 5)); // 4
console.log(missingInUnsorted([1, 3, 4, 5], 1, 5)); // 2
console.log(missingInUnsorted([1, 2, 3, 4], 1, 5)); // 5
