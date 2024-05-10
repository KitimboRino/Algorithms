/*
Routine: uniques
Input: An array
Output: An array containing only unique elements from the input array

Steps:
1. Initialize an empty hash table and an empty array to store unique elements.
2. Iterate through the input array.
3. Check if the element is already in the hash table.
4. If not, add it to the hash table and push it to the result array.
5. Return the array containing unique elements.
*/

function uniques(array) {
    let hash = {};
    let uniques = [];

    for (let i = 0; i < array.length; i++) {
        // skip if already in hash
        if (!hash.hasOwnProperty(array[i])) {
            // set it to 1 because 0 is falsey
            hash[array[i]] = 1;
            uniques.push(array[i]);
        }
    }
    return uniques;
}

// Example:
console.log(uniques([4, 2, 3, 3, 4, 2])); // Output: [4, 2, 3]
console.log(uniques([1, 2, 5, 6, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5] // Double check this
