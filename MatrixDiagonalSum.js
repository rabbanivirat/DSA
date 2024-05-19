var diagonalSum = function (nums){
    let n = nums.length;
    let sum = 0;
    for(let i=0;i<n;i++){
      sum = sum + nums[i][i] + nums[i][n-i-1];
    }
    if(n%2!==0){
      let oddmat = Math.floor(n/2);
      sum = sum - nums[oddmat][oddmat];
    }
    return sum
  }