function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        // Calculate middle index
        const middle = Math.floor((left + right) / 2);
        
        // check if target is Found
        if (nums[middle] === target) {
            return middle;
        }
        
        // Determine which half is sorted and search accordingly
        if (nums[left] <= nums[middle]) {
            // Left half is sorted
            // Check if target is in the sorted left half
            if (nums[left] <= target && target < nums[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        } else {
            // Right half is sorted
            // Check if target is in the sorted right half
            if (nums[middle] < target && target <= nums[right]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
    }
    // Target not found
    return -1;
}


// Test cases from the problem
console.log("=== Testing Rotated Array Search ===");

// Example 1
const nums1 = [4, 5, 6, 7, 0, 1, 2];
const target1 = 0;
const result1 = search(nums1, target1);
console.log(`Input: [${nums1}], target: ${target1}`);
console.log(`Output: ${result1}`);
console.log(`Verification: nums[${result1}] = ${nums1[result1]}`);
console.log();

// Example 2
const nums2 = [4, 5, 6, 7, 0, 1, 2];
const target2 = 3;
const result2 = search(nums2, target2);
console.log(`Input: [${nums2}], target: ${target2}`);
console.log(`Output: ${result2}`);
console.log(`Verification: Target ${target2} not found in array`);
console.log();

// Example 3
const nums3 = [1];
const target3 = 0;
const result3 = search(nums3, target3);
console.log(`Input: [${nums3}], target: ${target3}`);
console.log(`Output: ${result3}`);
console.log(`Verification: Target ${target3} not found in array`);
console.log();
