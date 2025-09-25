using System;

public class Solution {
    public int MaxArea(int[] height) {
        // Write your code here
        return 0;
    }
}

public class Program {
    public static void Main(string[] args) {
        Solution solution = new Solution();
        
        // Example 1
        int[] height1 = {1, 8, 6, 2, 5, 4, 8, 3, 7};
        int result1 = solution.MaxArea(height1);
        Console.WriteLine("Example 1");
        Console.WriteLine("Input: height = [" + string.Join(", ", height1) + "]");
        Console.WriteLine("Output: " + result1);
        
        // Example 2
        int[] height2 = {1, 1};
        int result2 = solution.MaxArea(height2);
        Console.WriteLine("\nExample 2");
        Console.WriteLine("Input: height = [" + string.Join(", ", height2) + "]");
        Console.WriteLine("Output: " + result2);
    }
}