/*
Routine: isSubstring
Input: Two strings: the main string and the substring to search for.

Steps:
1. Itwerate through the main string wit a loop.
2. At each iteration, check if a subString of mainString starting from the current index and of the same length as the subString is equal to the subString.
3.If a mtach is found, return true. If no match is found, return false.
*/

function isSubstring(mainString, subString) {
    for (let i = 0; i <= mainString.length - subString.length; i++) {
        if (mainString.substring(i, i + subString.length) === subString) {
            return true;
        }
    }
    return false;
}


// Example usage:
console.log(isSubstring('ggraph', 'graph'));
console.log(isSubstring('geography', 'graph'));
console.log(isSubstring('diggin', 'inn'));