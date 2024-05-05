/*
Routine: fizzBuzz
Input: A positive integer n
Output: String containing the results of the FizzBuzz game from 1 to n

Steps:
1. Initialize an empty array to store the results
2. Iterate from 1 to n
  - If the current number is divisible by 3 and 5:
    -- Append "FizzBuzz" to the results array
  - Else if the current number is divisible by 3:
    -- Append "Fizz" to the results array
  - Else if the current number is divisible by 5:
    -- Append "Buzz" to the results array
  - Else:
    -- Append the current number to the results array
3. Return the results array as a string
*/

function fizzBuzz(n) {
    let finalArr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            finalArr.push('FizzBuzz');
        } else if (i % 3 === 0) {
            finalArr.push('Fizz');
        } else if (i % 5 === 0) {
            finalArr.push('Buzz');
        } else {
            finalArr.push(i);
        }
    }
    return finalArr.join('');
}

// Example usage
console.log(fizzBuzz(15)); // 12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz