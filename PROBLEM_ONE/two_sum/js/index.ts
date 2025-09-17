const searchFn = (nums: number[], target: number): number[] => {
   const map = new Map();
   let result: number[] = [];

   for (const num of nums) {
      let pair = target - num;
      if (map.has(pair)) {
         result.push(map.get(pair));
         result.push(nums.indexOf(num));
      }

      map.set(num, nums.indexOf(num));
   }

   return result;
};
