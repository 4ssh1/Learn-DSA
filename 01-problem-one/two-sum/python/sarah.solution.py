# less optimal

def twoSum(nums, target) :
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []       
    
nums = [2, 6, 1, 6]
target = 7

print(twoSum(nums, target))

# Optimal solution
# Using hashmap

def opt_two_sum(nums, target):
    cache = {}
    for i in range(len(nums)):
        compliment = target - nums[i]
        if compliment in cache:
            return [cache[compliment], i]
        cache[nums[i]] = i
    return []

nums = [2, 4, 10, 13]
target = 15

print(opt_two_sum(nums, target))
