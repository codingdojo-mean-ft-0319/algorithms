
/**
 * Recursive Fibonacci

Write rFib(num) . Recursively compute and return num th Fibonacci value. As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: rFib(2) = 1 (0+1); rFib(3) = 2 (1+1); rFib(4) = 3 (1+2); rFib(5) = 5 (2+3). rFib(3.65) = rFib(3) = 2 , rFib(-2) = rFib(0) = 0 .
 */
let count = 0;

function rFib(num){
  count++;
  // console.log(`1st num is ${num}`)
  if(num <= 0){
    return 0;
  }
  if(num <= 1){
    return 1;
  }

  return rFib(num -1) + rFib(num -2);
}
console.log(rFib(40));

console.log(`we recursed rFib ${count} times`);
let count2 = 0;
function rFib2(num, cache = {}) {
  count2++;
  if(num <= 0){
    return 0;
  }
  if(num <= 1){
    return 1;
  }
  if(num in cache){
    return cache[num];
  }
  // console.log(`before cache is`, cache)
  cache[num] = rFib2(num - 1, cache) + rFib2(num -2, cache);
  // console.log(`after cache is`, cache)
  return cache[num];

}
rFib2(40);
console.log(`we recursed rFib2 ${count2} times`);