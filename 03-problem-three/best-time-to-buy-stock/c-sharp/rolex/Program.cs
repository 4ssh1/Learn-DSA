using System;

public class Solution {
    public int MaxProfit(int[] prices) {
        // Write your code here
        return 0;
    }
}

public class Program {
    public static void Main(string[] args) {
        Solution solution = new Solution();
        
        // Example 1
        int[] prices1 = {7, 1, 5, 3, 6, 4};
        int result1 = solution.MaxProfit(prices1);
        Console.WriteLine("Example 1");
        Console.WriteLine("Input: prices = [" + string.Join(", ", prices1) + "]");
        Console.WriteLine("Output: " + result1);
        
        // Example 2
        int[] prices2 = {7, 6, 4, 3, 1};
        int result2 = solution.MaxProfit(prices2);
        Console.WriteLine("\nExample 2");
        Console.WriteLine("Input: prices = [" + string.Join(", ", prices2) + "]");
        Console.WriteLine("Output: " + result2);
    }
}