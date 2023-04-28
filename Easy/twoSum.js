const twoSum = function(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {

      const com = target - nums[i];

      if(nums.includes(com) && nums.indexOf(com) !== i){
        return [nums.indexOf(com), i];
      }
    }
    
};

const result = twoSum([3,2,4], 6);
console.log(result);