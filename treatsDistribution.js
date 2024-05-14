/*
Routine: treatsDistribution
input: Array of snacks
output: Maximum number of unique snacks that can be chosen

Steps:
1. Create a set of unique snacks
2. Calculate the maximum number of snacks that can be chosen
3. Return the minimum of the number of unique snacks and the maximum number of snacks that can be chosen
*/

//Using a pure set
function treatsDistribution(snacks) {
    const uniquesAvailable = new Set(snacks).size;
    const maxToChoose = snacks.length / 2;
    return uniquesAvailable >= maxToChoose ? maxToChoose : uniquesAvailable;
}

//Using a JS object keys to represent a set
function treatsDistribution(snacks) {
    var hashSet = {};
    for (var i = 0; i < snacks.length; i++) {
        var snack = snacks[i];
        if (hashSet.hasOwnProperty(snack)) {
            hashSet[snack] = hashSet[snack] + 1;
        } else {
            hashSet[snack] = 1;
        }
    }
    var uniquesAvailable = Object.keys(hashSet).length;
    return uniquesAvailable >= snacks.length / 2 ? snacks.length / 2 : uniquesAvailable;
}

//Example usage
let snacks = ['chocolate', 'chocolate', 'chocolate', 'chips', 'chips', 'apple', 'guava', 'apple', 'apple'];
console.log(treatsDistribution(snacks)); // Expected output: 4
console.log(treatsDistribution([2, 2, 3, 3, 4, 4])) // Expected output: 3
