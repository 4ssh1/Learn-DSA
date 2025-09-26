function twoSum(nums, target) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    // Check if complement was already stored
    if (seen[complement] !== undefined) {
      return [seen[complement], i]; // return the two indices
    }

    // Store current number with its index
    seen[num] = i;
  }

  return [];
}

const nums = [2, 11, 7, 15];
const target = 9;

console.log(twoSum(nums, target));
// Time Complexity: O(n) - We go through the array once
// Space Complexity: O(n) - In the worst case, we store all n numbers in the hash map
