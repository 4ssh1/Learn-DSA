using System;
using System.Collections.Generic;

public class Solution {
    public int[] TwoSum(int[] nums, int target) {

        // Create a dictionary to hold key-value pairs of previously iterated number and its index
        Dictionary<int, int> numIndices = new();

        // Iterate through the array
        for (int i = 0; i < nums.Length; i++) {

            // Find the complement of the current number in the target sum
            int complement = target - nums[i];

            // If the complement is in the dictionary, return the indices
            if (numIndices.TryGetValue(complement, out int complementIndex)) {
                return new int[] { complementIndex, i };
            }

            // Add the current number and its index to the dictionary
            numIndices.Add(nums[i], i);
        }

        // If no pair is found, return an empty array
        return Array.Empty<int>();
    }

    // Because the array is only iterated once, the time complexity is O(n)
}

public class Program {
    public static void Main(string[] args) {
        Solution solution = new Solution();
        
        // Example 1
        int[] nums1 = {2, 7, 11, 15};
        int target1 = 9;
        int[] result1 = solution.TwoSum(nums1, target1);
        Console.WriteLine("Example 1");
        Console.WriteLine("Input: nums = [" + string.Join(", ", nums1) + "], target = " + target1);
        Console.WriteLine("Output: [" + string.Join(", ", result1) + "]");
        
        // Example 2
        int[] nums2 = {3, 2, 4};
        int target2 = 6;
        int[] result2 = solution.TwoSum(nums2, target2);
        Console.WriteLine("\nExample 2");
        Console.WriteLine("Input: nums = [" + string.Join(", ", nums2) + "], target = " + target2);
        Console.WriteLine("Output: [" + string.Join(", ", result2) + "]");
    }
}