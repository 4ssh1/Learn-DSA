const searchFn = (nums, target) => {
   const map = new Map();
   let result = [];

   // for (let i = 0; i < nums.length; i++) {
   for (const num of nums) {
      let pair = target - num;
      if (map.has(pair)) {
         result.push(map.get(pair));
         result.push(nums.indexOf(num));
         return result;
      }

      // map.set(num, i);
      map.set(num, nums.indexOf(num));
   }

   return result;
};

const nums = [3, 9, 1, 8, 9, 2, 5, 8, 9, 1, 7, 2, 7, 11, 15];
const target = 9;
const result = searchFn(nums, target);

console.log(result, nums[result[0]] + nums[result[1]]);

/*

// My Approach

- first i created a map to store a key value pair of the nums array that i already iterated through in this case i stored the num as the key and its index as the value.
- before storing i subtract the number from the target to get its possible pair, then check if that pair is in the map.
- if its not present, i store the current number and its index in the map.
- if its present i return the indev of the current number and the index of the pair stored in the map.
- with this approach we only have to iterate through the array once and when we find the corresponding pair we can return it immediately.

*/
