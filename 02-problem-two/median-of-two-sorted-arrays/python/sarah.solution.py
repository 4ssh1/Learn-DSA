def findMedianSortedArrays(nums1, nums2):
    # Always binary search on the smaller array for efficiency
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1

    m, n = len(nums1), len(nums2)
    total = m + n
    half = total // 2

    left, right = 0, m
    while left <= right:
        # Partition nums1 at i and nums2 at j so left parts have half elements
        i = (left + right) // 2
        j = half - i

        # Handle out-of-bound cases by using -inf / +inf
        left1 = nums1[i - 1] if i > 0 else float('-inf')
        right1 = nums1[i] if i < m else float('inf')
        left2 = nums2[j - 1] if j > 0 else float('-inf')
        right2 = nums2[j] if j < n else float('inf')

        # Check if correct partition: left half ≤ right half
        if left1 <= right2 and left2 <= right1:
            # If total is even: median = average of two middles
            if total % 2 == 0:
                return (max(left1, left2) + min(right1, right2)) / 2
            # If total is odd: median is the middle element
            else:
                return min(right1, right2)

        # If left1 is too big, move partition left
        elif left1 > right2:
            right = i - 1
        # Else move partition right
        else:
            left = i + 1

print(findMedianSortedArrays([1,3],[2]))      # 2.0
print(findMedianSortedArrays([1,2],[3,4]))    # 2.5


# O(log(min(m,n)))