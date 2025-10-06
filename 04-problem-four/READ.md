# Friends Of Appropriate Ages

## Problem Description
Given an integer array 'ages' where 'ages[i]' is the age of the i-th person, determine the total number of friend requests made. A person x will send a friend request to person y (where x is not y) only if all of the following are true:
- 'age[y]' is greater than 0.5 * 'age[x]' + 7
- 'age[y]' is less than or equal to 'age[x]'
- 'age[y]' is less than or equal to 100 OR 'age[x]' is greater than or equal to 100

A person does not send a request to themselves. Return the total number of friend requests.

### **Solve this using both linear search and binary search and add in their respective folders.**

## Examples
### Example 1
- Input: 'ages' = [16, 16]
- Output: 2
- Explanation: Both people send friend requests to each other.

### Example 2
- Input: 'ages' = [16, 17, 18]
- Output: 2
- Explanation: Requests are made from 17 to 16, and from 18 to 17.

### Example 3
- Input: 'ages' = [20, 30, 100, 110, 120]
- Output: 3
- Explanation: Requests are made from 110 to 100, 120 to 110, and 120 to 100.

## Constraints
- 'n' equals 'ages.length'
- 1 <= n <= 2 * 10^4
- 1 <= 'ages[i]' <= 120

## Approach
### Linear Search
- Use nested loops to check all pairs (x, y).
- For each pair, verify the friendship conditions.
- Count valid requests, ensuring x is not y.
- Time Complexity: O(n^2)
- Space Complexity: O(1)

### Binary Search
- Sort the 'ages' array.
- For each x, use binary search to find the range of y ages that meet the conditions.
- Count requests within this range, adjusting for duplicates and self-requests.
- Time Complexity: O(n log n)
- Space Complexity: O(1) or O(n) if using a temporary array.

