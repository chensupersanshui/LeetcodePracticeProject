/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  const len = nums.length
  const arr  = []  
  for(let j = 0; j < len; j++) {
      let i = 1
      if(j === len - 1) {
          var a = 0
      }else {
          var a = j + 1
      }
      
      while(i < len) {
             
               if(nums[j] <nums[a]) {
                   arr.push(nums[a])
                   break
               }
               a++
               i++
               if(a > len - 1) {
                   a = 0
               }
          }
      if(arr.length < j + 1) {
          arr.push(-1)
      }
  }
 return arr
};