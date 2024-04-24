/*
Definition: is a word, or phrase, or name formed by rearragnining the letters
of another: such as cinema, formed from iceman

Routine: isAnAnagram
Input: Two strings, str1 and str2
Output: True if str1 and str2 are anagrams; false otherwise

Steps:
1. Remove any non-alpahbetic characters and convert both strings to lowercase
2. Check if the lengthts of the two strings are eaqual. If not, they cna tbe anangrams.
3. Convert both strings to arrays of characters.
4. Sort both arrays.
5. Compare the sorted arrays. If they are equal, the strings are anagrams; otherwise they are not.
*/


function isAnAnagram(str1, str2) {
    str1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Examples
console.log(isAnAnagram('cinema', 'iceman')); // true
console.log(isAnAnagram('hello', 'world')); // false