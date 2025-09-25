# Iterative modified binary search (O(log n), O(1) space)

def search_arr(nums, target):
    left, right = 0, len(nums) - 1            # initialize the two pointers for binary search

    while left <= right:                     # continue while the search window is valid
        mid = (left + right) // 2            # middle index (integer division)

        if nums[mid] == target:              # if middle element is the target, return index
            return mid

        # If left..mid is sorted (non-rotated) because left value <= mid value
        if nums[left] <= nums[mid]:
            # If target lies within the sorted left half, move right to mid-1 to search left
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                # Otherwise search the right half
                left = mid + 1
        else:
            # Otherwise, the right half mid..right must be sorted
            # If target lies within the sorted right half, move left to mid+1 to search right
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                # Otherwise search the left half
                right = mid - 1

    return -1                                 # not found

# nums[left] <= nums[mid] checks which half is properly sorted.
# Based on which half is sorted, we decide whether target could be inside it; if yes, move into that half, else into the other.
# Always O(log n) time because we cut the search space in half each iteration; O(1) extra space



# Recursive modified binary search (same logic, recursive form)

def search_recursive(nums, target):
    # helper performs search in nums between indices l and r (inclusive)
    def helper(l, r):
        if l > r:                            # base case: empty interval => not found
            return -1

        mid = (l + r) // 2                   # compute midpoint

        if nums[mid] == target:              # found target at mid
            return mid

        if nums[l] <= nums[mid]:             # left half is sorted
            if nums[l] <= target < nums[mid]:
                return helper(l, mid - 1)    # target in left sorted half
            else:
                return helper(mid + 1, r)    # target not in left -> search right
        else:
            # right half is sorted
            if nums[mid] < target <= nums[r]:
                return helper(mid + 1, r)    # target in right sorted half
            else:
                return helper(l, mid - 1)    # otherwise search left

    return helper(0, len(nums) - 1)          # initial call over full array


# Logic mirrors the iterative approach but uses the call stack.
# Each recursive call shrinks interval; recursion depth = O(log n).
# Space: O(log n) due to recursion stack.




# Pivot + binary search (find rotation pivot, then binary search) — O(log n), O(1) space

def search_pivot(nums, target):
    n = len(nums)                            # length of array
    if n == 0:                              
        return -1                            # empty array edge case

    # 1) find pivot: index of smallest element (rotation point)
    left, right = 0, n - 1
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[right]:
            # pivot must be to the right of mid
            left = mid + 1
        else:
            # pivot is at mid or to the left of mid
            right = mid
    pivot = left                              # pivot = index of smallest element

    # 2) normal binary search with index mapping
    left, right = 0, n - 1
    while left <= right:
        mid = (left + right) // 2
        real_mid = (mid + pivot) % n         # map mid to the rotated array index

        if nums[real_mid] == target:
            return real_mid
        if nums[real_mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1                                 # not found


# First loop finds the smallest element (rotation pivot) by comparing nums[mid] with nums[right].
# If nums[mid] > nums[right], min is to the right of mid.
# Else min is at mid or left of it.
# After pivot is found, we treat the rotated array as two sorted segments shifted by pivot. We binary search on a virtual sorted array by mapping mid -> real_mid = (mid + pivot) % n.
# Also O(log n) time and O(1) extra space.


nums = [4,3,6,7,0,1,2]
print(search_arr(nums, 0))   # 4
print(search_recursive(nums, 3))   # -1
print(search_pivot(nums, 6))       # 2
