/*
Routine: Intersection
Input: Two arrays of numbers
Output: Array containing common elements between the two arrays


Create a set from the first input array
Filter the second input array to only include elements that exixt in the set created from the first array
Return the filtered array as the intersection of the two input arrays
*/

function intersection(nums1, nums2) {
    const set = new Set(nums1);
    const filteredSet = new Set(nums2.filter((n) => set.has(n)));
    return [...filteredSet];
}

// Test cases
let nums1 = [1, 2, 2, 4, 8, 1];
let nums2 = [2, 3, 2, 4, 5, 6, 8];

console.log(intersection(nums1, nums2)); // [2, 4, 8]