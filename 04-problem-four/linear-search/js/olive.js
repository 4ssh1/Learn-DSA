var numFriendRequests = function (ages) {
  let totalRequest = 0;

  for (let i = 0; i < ages.length; i++) {
    let currentAge = ages[i];
    let minAge = Math.floor(0.5 * currentAge + 7) + 1;
    let maxAge = currentAge;

    if (minAge > maxAge) continue;

    //we set j to check every other person
    for (let j = 0; j < ages.length; j++) {
      if (i === j) continue; ///here we handle sefl request

      let otherAge = ages[j];

      //if j falls in btw min and max age we add to total request
      if (otherAge >= minAge && otherAge <= maxAge) {
        totalRequest++;
      }
    }
  }

  return totalRequest;
};

console.log(numFriendRequests([20, 20, 25, 30, 50, 60]));
