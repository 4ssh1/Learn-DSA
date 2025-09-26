function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // Decide which half  is normally sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // discard right half
      } else {
        left = mid + 1;
      }
    } else {
      // Right half sorting

      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  //  At each step the array is cut in half, we keep O(log n) time.
  return -1; //code returns -1 if target is not in the array
}

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;

const index = search(nums, target);
console.log(index);
