using System;

public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        // Write your code here
        return new int[0];
    }
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