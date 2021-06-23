let twoSum = (nums, target) => {
  var sums = []
  var hashTables = {}

  for(i in nums){
    var sumMinusTarget = target - nums[i]
    if(hashTables[sumMinusTarget.toString()] !== undefined){
      sums.push([nums.indexOf(nums[i]), nums.indexOf(sumMinusTarget)])
      
    }
    hashTables[nums[i].toString()] = nums[i];

  }
  return console.log(sums)
}
twoSum([5, 6, 7, 9, 1, 7, 3], 10)
