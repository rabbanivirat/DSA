var getConcatenation = function(nums){
    let arr = []
    let n = nums.length
    for(let i=0;i<nums.length;i++){
     arr[i] = nums[i]
     arr[n+i] = nums[i]
    }
    return arr
 }