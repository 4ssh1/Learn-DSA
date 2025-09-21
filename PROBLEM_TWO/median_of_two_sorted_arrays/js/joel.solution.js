function findMedianSortedArrays(nums1, nums2) {
  let i = 0;
  let j = 0;
  let merged = []; // new sorted array

  // While both arrays have numbers left
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged[merged.length] = nums1[i];
      i++;
    } else {
      merged[merged.length] = nums2[j];
      j++;
    }
  }

  // If anything left in nums1
  while (i < nums1.length) {
    merged[merged.length] = nums1[i];
    i++;
  }

  // If anything left in nums2
  while (j < nums2.length) {
    merged[merged.length] = nums2[j];
    j++;
  }

  //Find median
  let total = merged.length;
  let mid = Math.floor(total / 2);

  if (total % 2 === 1) {
    //middle element
    return merged[mid];
  } else {
    //average of two middle elements
    return (merged[mid - 1] + merged[mid]) / 2;
  }
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
