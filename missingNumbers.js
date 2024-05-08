/*
Routine: missingNumbers
Input: Array of integers
Output: Array of integers that are missing in the array

Steps:
1. Initialize an array to store missing numbers
2. Loop through the array starting from the second element
3. Calculate the difference between current and previous elements
4. If the difference is greater than 1, there are missing numbers
5. Loop through the range of missing numbers and add them to the missing array
6. Return the missing array

*/

function missingNumbers(numArr) {
    let missing = [];
    
    for (let i = 1; i < numArr.length; i++) {
        let diff = numArr[i] - numArr[i - 1];
        
        if (diff > 1) {
            for (let j = 1; j < diff; j++) {
                missing.push(numArr[i - 1] + j);
            }
        }
    }    
    return missing;
}

// Example cases
console.log(missingNumbers([1, 2, 3, 5])); // [4]
console.log(missingNumbers([1, 3, 4, 5])); // [2]
console.log(missingNumbers([1, 2, 3, 4])); // []
console.log(missingNumbers([1, 3, 5, 7])); // [2, 4, 6]