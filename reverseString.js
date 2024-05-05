/*
Routine: reverseString
Input: String
Output: Reversed string

NB: Do not use the built-in reverse method
    Using the 2-pointer approach

Steps:
1. Split the input string into an array of characters
2. Initilize start index to 0 and end index to the length of the string -1
3. Iterate over the string from start to end index
- Swap the characters at the start and end index
- Increment the start index and decrement the end index
4. Return the joined array of characters as a string
*/

function reverseString(string) {
    let stringArray = str.split(''); // Split the input string into an array of characters
    let startIndex = 0;
    let endIndex = string.length - 1;

    // Iterate over the string from start to end index
    while (startIndex <= endIndex) {
        const temp = stringArray[startIndex]; // Swap the characters at the start and end index
        stringArray[startIndex] = stringArray[endIndex];
        stringArray[endIndex] = temp;
        startIndex++;
        endIndex--;
    }
    return stringArray.join(''); // Return the joined array of characters as a string
}

// Example usage
let str = "RinoKitimbo";
console.log(reverseString(str)); // obmitiKoniR