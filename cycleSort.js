/*
The cycle sort algorithm is an in-place sorting algorithm. This means that no external data
structure (such as a list or heap) is required to perform the cycle sort operation

Routine: cycleSort
Input: Array of numbers
Output: Number of operations performed during sorting

Steps:
1. Perform cycle sort on the input array
2. Count the number of operations performed during sorting
3. Return the count of operations
*/
function cycleSort(inputArray) {
    let operations = 0; // Initialize the count of operations

    // Iterate through each element in the array
    for (let cycleIndex = 0; cycleIndex < inputArray.length; cycleIndex++) {
        let number = inputArray[cycleIndex];
        let currentIndex = cycleIndex;

        // Find the correct position for the current number in the cycle
        for (let i = cycleIndex + 1; i < inputArray.length; i++) {
            let currentNumber = inputArray[i];
            if (currentNumber < number) {
                currentIndex++;
            }
        }

        // If the current index is the same as the cycle index, continue to the next cycle
        if (currentIndex === cycleIndex) {
            continue;
        }

        // Swap the numbers at the current index and the cycle index
        while (number === inputArray[currentIndex]) {
            currentIndex++;
        }
        [inputArray[currentIndex], number] = [number, inputArray[currentIndex]];
        operations++; // Increment the count of operations

        // Continue swapping until the current index is back to the cycle index
        while (currentIndex !== cycleIndex) {
            currentIndex = cycleIndex;

            // Find the correct position for the current number in the cycle
            for (let i = cycleIndex + 1; i < inputArray.length; i++) {
                let currentNumber = inputArray[i];
                if (currentNumber < number) {
                    currentIndex++;
                }
            }

            // Swap the numbers at the current index and the cycle index
            while (number === inputArray[currentIndex]) {
                currentIndex++;
            }
            [inputArray[currentIndex], number] = [number, inputArray[currentIndex]];
            operations++; // Increment the count of operations
        }
    }

    return operations; // Return the count of operations
}

// Define the input array
let inputArray = [9, 4, 6, 8, 14, 3];
let inputArrayCopy = inputArray.slice(); // Make a copy of the input array

// Call the cycleSort function to sort the input array and count operations
let operations = cycleSort(inputArrayCopy);

// Print the sorted array and the count of operations
console.log('Sorted Array:', inputArrayCopy);
console.log('Operations:', operations);
