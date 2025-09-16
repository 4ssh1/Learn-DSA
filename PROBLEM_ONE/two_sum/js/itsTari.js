/*I used the hash map approach. Instead of checking every possible pair 
(which would be slow), I store each number and its index in a hash map as 
I iterate through the array. For each number, I calculate what complement 
I need to reach the target, then check if I've already seen that complement.
If yes, I return both indices. This gives me O(n) time complexity instead of O(n²).

Why This Solution is Efficient
Time Complexity: O(n) - We only go through the array once
Space Complexity: O(n) - In worst case, we store all numbers in our hash map
*/


function twoSum(nums, target) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;
    
        if (complement in seen) {
            return [seen[complement], i];
        }
        seen[currentNum] = i;
    }
    // This should never happen according to the problem constraints(every input has exactly one solution)
    return [];
}

// Test cases to verify solution
console.log("=== Testing Solution ===");
// Example 1
const nums1 = [2, 7, 11, 15];
const target1 = 9;
const result1 = twoSum(nums1, target1);
console.log(`Input: [${nums1}], target: ${target1}`);
console.log(`Output: [${result1}]`);
console.log(`Verification: ${nums1[result1[0]]} + ${nums1[result1[1]]} = ${nums1[result1[0]] + nums1[result1[1]]}`);
console.log();

//Example 2
const nums2 = [3, 2, 4];
const target2 = 6;
const result2 = twoSum(nums2, target2);
console.log(`Input: [${nums2}], target: ${target2}`);
console.log(`Output: [${result2}]`);
console.log(`Verification: ${nums2[result2[0]]} + ${nums2[result2[1]]} = ${nums2[result2[0]] + nums2[result2[1]]}`);
console.log();

//Example 3
const nums3 = [3, 3];
const target3 = 6;
const result3 = twoSum(nums3, target3);
console.log(`Input: [${nums3}], target: ${target3}`);
console.log(`Output: [${result3}]`);
console.log(`Verification: ${nums3[result3[0]]} + ${nums3[result3[1]]} = ${nums3[result3[0]] + nums3[result3[1]]}`);
