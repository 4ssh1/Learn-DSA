# Approach — In-place index placement (Cyclic Sort)

# Core idea:
# Valid numbers must be in range 1..n (where n = len(nums))
# Place each number x at index x-1 if it is in range.
# After that, scan and find the first index i where nums[i] != i+1.

def firstMissingPositive(nums):
    n = len(nums)

    # Step 1: Place each number x at index x-1 if it is in [1, n]
    i = 0
    while i < n:
        correct_index = nums[i] - 1
        # Swap only if: number is in range and not already at its correct place
        if 1 <= nums[i] <= n and nums[i] != nums[correct_index]:
            nums[i], nums[correct_index] = nums[correct_index], nums[i]
        else:
            i += 1

    # Step 2: Scan for the first index where nums[i] != i+1
    for i in range(n):
        if nums[i] != i + 1:
            return i + 1

    # Step 3: If all numbers are correct, answer is n+1
    return n + 1

# Example: [3,4,-1,1]

# i=0: nums[0]=3 → correct_index=2 → swap → [-1,4,3,1]
# i=0: nums[0]=-1 → skip
# i=1: nums[1]=4 → correct_index=3 → swap → [-1,1,3,4]
# i=1: nums[1]=1 → correct_index=0 → swap → [1,-1,3,4]
# Now: [1,-1,3,4]

# Scan: i=0 (1 ok), i=1 (-1 != 2) → return 2
