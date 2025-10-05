# Linear Search Algorithm

## Overview
The **Linear Search Algorithm**, also known as **Sequential Search**, is a straightforward searching algorithm used to locate a specific element within a list or array. It systematically checks each element in the list until it finds the target element or exhausts the list.

## How It Works
1. **Input**: A list or array of elements and a target value to search for.
2. **Process**:
   - Begin at the **first element** of the list.
   - **Compare** each element with the target value.
   - If a **match** is found, return the **index** of that element.
   - If **no match** is found after checking all elements, return a value (e.g., `-1`) to indicate the element is not present.
3. **Output**: The index of the target element if found, or `-1` if not found.

## Time Complexity
- **Best Case**: `O(1)` - The target is found at the first position.
- **Average Case**: `O(n)` - On average, the algorithm checks approximately half the list.
- **Worst Case**: `O(n)` - The target is at the end or not present, requiring a full list traversal, where `n` is the number of elements.

## Space Complexity
- **O(1)** - Linear search uses only a constant amount of extra space, regardless of input size, making it highly memory-efficient.

## Advantages
- **Simple** to implement and understand.
- Works on **unsorted lists**, unlike algorithms such as Binary Search.
- Suitable for **small datasets** or lists that are rarely searched.

## Disadvantages
- **Inefficient** for large datasets due to its `O(n)` time complexity.
- Not ideal for **sorted lists**, where faster algorithms like **Binary Search** (`O(log n)`) are more efficient.

## Example Use Case
Consider a list of numbers: `[4, 2, 7, 1, 9]`, and you want to find the index of `7`:
- Start at index `0`: `4` ≠ `7`, move to the next element.
- Index `1`: `2` ≠ `7`, move to the next element.
- Index `2`: `7` = `7`, return index `2`.

