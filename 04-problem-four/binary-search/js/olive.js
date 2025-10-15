//this is a helper function that helps find the minimum age ages[i] can send to
const lowerBound = (nums, target) => {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

///helps find the max age ages[i] can send to
const upperBound = (nums, target) => {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

var numFriendRequests = function (ages) {
  let totalRequest = 0;
  ages.sort((a, b) => a - b); //we sort the array

  for (let i = 0; i < ages.length; i++) {
    let currentAge = ages[i];
    //here we state the minimum and maximum age a person can send requests to based on the conditions given
    let minAge = Math.floor(0.5 * currentAge + 7) + 1; //we added a plus one to make it strictly greater
    let maxAge = currentAge;

    //we run this check to skip any user with a minage > maxage (happens for users below 16)
    if (minAge > maxAge) continue;

    let lowerIndex = lowerBound(ages, minAge);
    let upperIndex = upperBound(ages, maxAge);

    let count = upperIndex - lowerIndex;

    //we handle self request by removing 1
    if (count > 0) {
      count--;
    }

    totalRequest += count;
  }
  return totalRequest;
};
console.log(numFriendRequests([20, 20, 25, 30, 50, 60]));

/*
 instance: take age 25 (index 2), minage = 20, maxage = 25
 passes the if check 
 we calculate 20 with lowerindex, at the third and final iteration left and right will be at index 0 then we return left = 0

we run maxage on upperindex, at third and final iteration left and right = index 3, we retorn left

count = 3-0
since count > 0, we remove 1, cos 25 cant send a request to 25
*/
