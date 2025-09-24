using System;

public class Solution {
    public int FirstMissingPositive(int[] nums) {
        // Write your code here
        return -1;
    }
}

public class Program {
    public static void Main(string[] args) {
        Solution solution = new Solution();
        
        // Example 1
        int[] nums1 = {1, 2, 0};
        int result1 = solution.FirstMissingPositive(nums1);
        Console.WriteLine("Example 1");
        Console.WriteLine("Input: nums = [" + string.Join(", ", nums1) + "]");
        Console.WriteLine("Output: " + result1);
        
        // Example 2
        int[] nums2 = {3, 4, -1, 1};
        int result2 = solution.FirstMissingPositive(nums2);
        Console.WriteLine("\nExample 2");
        Console.WriteLine("Input: nums = [" + string.Join(", ", nums2) + "]");
        Console.WriteLine("Output: " + result2);
    }
}