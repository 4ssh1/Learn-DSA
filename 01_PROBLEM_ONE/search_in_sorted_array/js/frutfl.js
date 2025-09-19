const searchFn = (arr, target, leftsideIndex = 0, rightsideIndex = arr.length - 1) => {
   if (leftsideIndex > rightsideIndex) return -1;

   let middleIndex = Math.floor((leftsideIndex + rightsideIndex) / 2);

   if (arr[middleIndex] === target) return middleIndex;

   if (arr[leftsideIndex] <= arr[middleIndex]) {
      if (target >= arr[leftsideIndex] && target < arr[middleIndex])
         return searchFn(arr, target, leftsideIndex, middleIndex - 1);
      else return searchFn(arr, target, middleIndex + 1, rightsideIndex);
   } else {
      if (target > arr[middleIndex] && target <= arr[rightsideIndex])
         return searchFn(arr, target, middleIndex + 1, rightsideIndex);
   }
};

const arr = [4, 5, 6, 7, 8, 9, 0, 1, 2, 3];
const target = 3;

console.log(searchFn(arr, target));

/*
// My Approach

-  i used recursion to implement a binary search for the sorted arrray
- the function accepts the arr, target , left side index and sight side index and calculates the middle index from the left and right index
- i first check if the target is the middle index, if its not i divide the array into two parts and check which is sorted and then check if the target is present in that part, if the it is, i call the function again and pass in new values for the left and right side
- if the target isnt in the left side, i call the function with new values for right and left index, to enable it check the right side of the array for the target.
*/
