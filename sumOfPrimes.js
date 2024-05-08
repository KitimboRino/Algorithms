/*
Routine: sumOfPrimes
Input: Integer n
Output: Sum of all prime numbers up to n

Steps:
1. Create a helper function to check if a number is prime
2. Initialize a variable to store the sum of primes
3. Loop through numbers from 2 to n
4. Check if the number is prime using the helper function
5. If the number is prime, add it to the sum
6. Return the sum of primes
*/

function sumOfPrimes(n) {
    // Function to check if a number is prime
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }

    // Sum of primes
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

// Example cases
console.log(sumOfPrimes(10)); // 17
console.log(sumOfPrimes(20)); // 77
console.log(sumOfPrimes(100)); // 1060
console.log(sumOfPrimes(200)); // 4227
console.log(sumOfPrimes(1000)); // 76127
console.log(sumOfPrimes(2000)); // 277050
console.log(sumOfPrimes(10000)); // 5736396
console.log(sumOfPrimes(20000)); // 21171191