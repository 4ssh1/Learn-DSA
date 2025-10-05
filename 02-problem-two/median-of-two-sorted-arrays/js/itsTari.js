// I use binary search on the smaller array to find the correct partition point.
// Instead of merging arrays, I logically partition both arrays so the left side
// contains half the elements. I verify the partition by checking that the maximum
// of the left side is less than or equal to the minimum of the right side. Once I
// find the valid partition, I calculate the median based on whether the total length
// is odd or even. This achieves O(log(m+n)) time complexity.

function findMedianSortedArrays(nums1, nums2) {
    // Always binary search on the smaller array for efficiency
   if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    const m = nums1.length;
    const n = nums2.length;
    const totalLength = m + n;
    const halfLength = Math.floor((totalLength + 1) / 2);
    
    // Binary search on nums1
    let left = 0;
    let right = m;
    
    while (left <= right) {
        // Partition position in nums1
        const partition1 = Math.floor((left + right) / 2);
        
        // Corresponding partition position in nums2
        // We need halfLength elements on the left side total
        const partition2 = halfLength - partition1;
        
        // Get the four important values around the partition
        // Use -Infinity and Infinity for edge cases (empty left/right)
        const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        const minRight1 = partition1 === m ? Infinity : nums1[partition1];
        const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        const minRight2 = partition2 === n ? Infinity : nums2[partition2];
        
        // Check if we found the correct partition
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // Perfect partition found!
            
           if (totalLength % 2 === 0) {
                // Even number of elements
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                // Odd number of elements
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            // partition1 is too far right, move it left
            right = partition1 - 1;
        } else {
            // partition1 is too far left, move it right
            left = partition1 + 1;
        }
    }
    // Should never reach here if inputs are valid
    throw new Error("Input arrays are not sorted or invalid");
}

// Test cases from the problem
console.log("Testing Median of Two Sorted Arrays");

// Example 1: Odd total length
const nums1_1 = [1, 3];
const nums2_1 = [2];
const result1 = findMedianSortedArrays(nums1_1, nums2_1);
console.log(`Example 1:`);
console.log(`Input: nums1 = [${nums1_1}], nums2 = [${nums2_1}]`);
console.log(`Output: ${result1}`);
console.log(`Explanation: Merged array = [1, 2, 3], median is 2\n`);

// Example 2: Even total length
const nums1_2 = [1, 2];
const nums2_2 = [3, 4];
const result2 = findMedianSortedArrays(nums1_2, nums2_2);
console.log(`Example 2:`);
console.log(`Input: nums1 = [${nums1_2}], nums2 = [${nums2_2}]`);
console.log(`Output: ${result2}`);
console.log(`Explanation: Merged array = [1, 2, 3, 4], median is (2 + 3) / 2 = 2.5\n`)