var fizzbuzz = function(n){
    let arr = [];
    for(let i=1;i<=n;i++){
      arr.push(i%3===0?"Fizz":i%5===0?"Buzz":i%15===0?"FizzBuzz":i);
    }
    return arr
  }