/*
Routine: reverseString
Input: String
Output: Reversed string

Split the input string into an array of characters
Initilize start index to 0 and end index to the length of the string -1
Iterate over the string from start to end index
- Swap the characters at the start and end index
- Increment the start index and decrement the end index
Return the joined array of characters as a string
*/

function reverseString(str) {
    let strArray = str.split(''); // Split the input string into an array of characters
    let startIndex = 0;
    let endIndex = str.length - 1;

    // Iterate over the string from start to end index
    while (startIndex <= endIndex) {
        const temp = strArray[startIndex]; // Swap the characters at the start and end index
        strArray[startIndex] = strArray[endIndex];
        strArray[endIndex] = temp;
        startIndex++;
        endIndex--;
    }
    return strArray.join(''); // Return the joined array of characters as a string
}

// Test cases
let str = "RinoKitimbo";
console.log(reverseString(str)); // obmitiKoniR