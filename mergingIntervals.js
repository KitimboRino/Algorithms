

/*
Routine: intervalOverlapDetection

Usage: - If you hear the term "overlapping intervals".
       - If you're asked to produce a list with only mutually exclusive intervals

Input: Array of intervals (each interval represented as [start, end])
Output: Array of non-overlapping intervals

Sort the intervals based on the start time
Initialize an empty stack
Push the first interval onto the stack
Iterate over the sorted intervals starting from the second interval

Pop the top interval from the stack
If there is no overlap between the top interval and the current interval:
-- Push the top interval back onto the stack
If there is an overlap:
-- Create a new interval extending the end time of the top interval to cover the end time of the current interval
-- Push the new interval onto the stack
Print the stack containing non-overlapping intervals
*/

function intervalOverlapDetection(intervals) {
    // Sort intervals based on the start time
    let sortedIntervals = intervals.slice().sort((a, b) => a[0] - b[0]);
    let stack = [];
    stack.push(sortedIntervals[0]); // Push the first interval onto the stack
    
    // Function to detect if there is an overlap between two intervals
    function detectOverlap(intervalA, intervalB) {
    return (intervalA[1] - intervalB[0]) > 0 && (intervalA[1] < intervalB[1]);
    }
    
    // Iterate over sorted intervals starting from the second interval
    for (let i = 1; i < sortedIntervals.length; i++) {
    let interval = sortedIntervals[i];
    let headerItem = stack.pop(); // Pop the top interval from the stack
    let newItem = null;
    
    // Check if there is an overlap between the top interval and the current interval
    if (!detectOverlap(headerItem, interval)) {
      stack.push(headerItem); // If no overlap, push the top interval back onto the stack
    } else {
      // If there is an overlap, create a new interval extending the end time of the top interval to cover the end time of the current interval
      newItem = [headerItem[0], interval[1]];
      stack.push(newItem); // Push the new interval onto the stack
    }
    }
    return stack; // Return the stack containing non-overlapping intervals
    }
    
    let intervals = [[10, 13], [12, 25], [4, 32], [7, 15], [2, 8], [9, 35]];
    console.log(intervalOverlapDetection(intervals)); // Expected output: [[2, 35]]