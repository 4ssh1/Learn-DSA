using System;

public class Solution {
    public int Search(int[] nums, int target) {
        // Write your code here
        return -1;
    }
}

public class Program {
    public static void Main(string[] args) {
        Solution solution = new Solution();
        
        // Example 1
        int[] nums1 = {4, 5, 6, 7, 0, 1, 2};
        int target1 = 0;
        int result1 = solution.Search(nums1, target1);
        Console.WriteLine("Example 1");
        Console.WriteLine("Input: nums = [" + string.Join(", ", nums1) + "], target = " + target1);
        Console.WriteLine("Output: " + result1);
        
        // Example 2
        int[] nums2 = {4, 5, 6, 7, 0, 1, 2};
        int target2 = 3;
        int result2 = solution.Search(nums2, target2);
        Console.WriteLine("\nExample 2");
        Console.WriteLine("Input: nums = [" + string.Join(", ", nums2) + "], target = " + target2);
        Console.WriteLine("Output: " + result2);
    }
}