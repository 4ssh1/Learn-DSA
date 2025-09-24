using System;

public class Solution
{
    public int Search(int[] nums, int target)
    {
        if (nums == null || nums.Length == 0)
        {
            return -1;
        }
        return SearchRecursive(nums, target, 0, nums.Length - 1);
    }

    private int SearchRecursive(int[] nums, int target, int leftIndex, int rightIndex)
    {
        // Base case: If the search space is invalid, the target is not found.
        if (leftIndex > rightIndex)
        {
            return -1;
        }

        int midIndex = (rightIndex + leftIndex) / 2;

        // Target found at the midIndex.
        if (nums[midIndex] == target)
        {
            return midIndex;
        }

        // Check if the left half (from leftIndex to midIndex) is sorted.
        if (nums[leftIndex] <= nums[midIndex])
        {
            // If the target is within the sorted left half, search there.
            if (target >= nums[leftIndex] && target < nums[midIndex])
            {
                return SearchRecursive(nums, target, leftIndex, midIndex - 1);
            }
            else
            {
                // Otherwise, search the right half.
                return SearchRecursive(nums, target, midIndex + 1, rightIndex);
            }
        }

        else // The right half (from midIndex to rightIndex) must be sorted.
        {
            // If the target is within the sorted right half, search there.
            if (target > nums[midIndex] && target <= nums[rightIndex])
            {
                return SearchRecursive(nums, target, midIndex + 1, rightIndex);
            }
            else
            {
                // Otherwise, search the left half.
                return SearchRecursive(nums, target, leftIndex, midIndex - 1);
            }
        }
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Solution solution = new();

        // Example 1
        int[] nums1 = { 4, 5, 6, 7, 0, 1, 2 };
        int target1 = 0;
        int result1 = solution.Search(nums1, target1);
        Console.WriteLine("Example 1");
        Console.WriteLine("Input: nums = [" + string.Join(", ", nums1) + "], target = " + target1);
        Console.WriteLine("Output: " + result1);

        // Example 2
        int[] nums2 = { 4, 5, 6, 7, 0, 1, 2 };
        int target2 = 3;
        int result2 = solution.Search(nums2, target2);
        Console.WriteLine("\nExample 2");
        Console.WriteLine("Input: nums = [" + string.Join(", ", nums2) + "], target = " + target2);
        Console.WriteLine("Output: " + result2);
    }
}