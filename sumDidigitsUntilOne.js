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