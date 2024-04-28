/*
Routine: sumDigitsUntilOne
Input: A number
Output: The final single digit after repeatedly summining its digits until reaching one digit.

Steps:
1, Continously sum the digits of the input numebr until it becomes a single digit.
2. Return the final single digit.

*/

function sumDigitsUntilOne(num) {
    while (num > 9) {
        const arr = num.toString().split('');
        num = arr.reduce((sum, item) => {
            return sum + Number(item);
        }, 0);
    }
    return num;
}

// Example usage:
console.log(sumDigitsUntilOne(123456)); // Output: 3 (1 + 2 + 3 + 4 + 5 + 6 = 21 -> 2 + 1 = 3)
console.log(sumDigitsUntilOne(999));    // Output: 9 (9 + 9 + 9 = 27 -> 2 + 7 = 9)
console.log(sumDigitsUntilOne(5));      // Output: 5 (Only one digit, returns itself)