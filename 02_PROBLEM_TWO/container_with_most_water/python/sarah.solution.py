# Approach (Two-pointer method)
# This gives O(n) time.

def maxArea(height):
    left, right = 0, len(height) - 1
    max_area = 0

    while left < right:
        # height of water depends on the shorter wall
        h = min(height[left], height[right])
        w = right - left
        area = h * w

        max_area = max(max_area, area)

        # Move the shorter line inward to try to find a taller wall
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return max_area
