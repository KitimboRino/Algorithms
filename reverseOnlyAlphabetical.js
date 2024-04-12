/*
Routine: reverseOnlyAlphabetical
Input: String
Output: String with alphabetical characters reversed while non-alphabetical characters remain in unchanged.


Initialize an empty array to store the alphabetical characters
Split the input string into an array of characters
Iterate through each character in the array
- If the character is an alphabetical character:
  -- Push the character into the array of alphabetical characters
Reverse the array of alphabetical characters
Initialize indexes for the reversed array
Iterate through each character in the original array
Iterate through each character in the original array
- If the character is an alphabetical:
  -- Replace the character with the character from the reversed array
Join the array back into a string
*/

function reverseOnlyAlphabetical(string) {
    const alphaChars = []; // Initialize an empty array to store alphabetical characters
    string = string.split(""); // strings are immutable in JavaScript
    for (let char of string) {
        if (/[a-zA-Z]/.test(char)) {
            alphaChars.push(char); // If the character is alphabetical, push it to the array of alphabetical characters
        }
    }
    const reversedAlpha = reverseArray(alphaChars); // Reverse the array of alphabetical characters
    let idxRA = 0; // Initialize indexes for the reversed array
    for (let i = 0; i < string.length; i++) {
        if (/[a-zA-Z]/.test(string[i])) {
            string[i] = reversedAlpha[idxRA++]; // If the character is alphabetical, replace it with the corresponding character from the reversed array
        }
    }
    return string.join(""); // Join the array back into a string and return
}

// Helper function to reverse an array
function reverseArray(array) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        const temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
    return array;
}

// Example usage
console.log(reverseOnlyAlphabetical('sll!$ehaes3')); // Expected output: "dc-ba"
console.log(reverseOnlyAlphabetical("a-bC-dEf-ghIj")); // Expected output: "j-Ih-gfE-dCba"
console.log(reverseOnlyAlphabetical("Test1ng-Leet=code-Q!")); // Expected output: "Qedo1ct-eeLg=ntse-T!"
