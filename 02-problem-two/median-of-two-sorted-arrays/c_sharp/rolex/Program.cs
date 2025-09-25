using System;

public class Solution {
    public double FindMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your code here
        return 0.0;
    }
}

public class Program {
    public static void Main(string[] args) {
        Solution solution = new Solution();
        
        // Example 1
        int[] nums1_1 = {1, 3};
        int[] nums1_2 = {2};
        double result1 = solution.FindMedianSortedArrays(nums1_1, nums1_2);
        Console.WriteLine("Example 1");
        Console.WriteLine("Input: nums1 = [" + string.Join(", ", nums1_1) + "], nums2 = [" + string.Join(", ", nums1_2) + "]");
        Console.WriteLine("Output: " + result1);
        
        // Example 2
        int[] nums2_1 = {1, 2};
        int[] nums2_2 = {3, 4};
        double result2 = solution.FindMedianSortedArrays(nums2_1, nums2_2);
        Console.WriteLine("\nExample 2");
        Console.WriteLine("Input: nums1 = [" + string.Join(", ", nums2_1) + "], nums2 = [" + string.Join(", ", nums2_2) + "]");
        Console.WriteLine("Output: " + result2);
    }
}