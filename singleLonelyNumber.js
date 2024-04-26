/*
Routine: findLonelyNumber
Input: An array of numbers
Output: THe single lonely number in the array

Steps:
1. Initialize a variable to store the result (intitlaly set to 0).
2. Iterate theought the aaray and perform XOR operation with each element.
3. The final result will be the single lonely number in the array.
*/



function findLonelyNumber(numbers) {
    let lonelyNumber = 0;

    for (let num of numbers) {
        lonelyNumber ^=num;
    }
    return lonelyNumber;
}

//Example:
console.log(findLonelyNumber([4,2,3,3,4,2])); //Output: 3