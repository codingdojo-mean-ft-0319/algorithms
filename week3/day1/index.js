/**
 * Print Array Contents
 */


var array = [98,87,76,65];

function printArray(arr, count){
  if( count === undefined){
    count = 0;
  }
  if(count >= arr.length){
    return
  }
  console.log(arr[count])
  count ++;
  printArray(arr, count);
}

function printArray2(arr){
  if( !arr.length){
    return arr;
  }
  console.log(arr[arr.length-1]);
  arr.length --;
  printArray2(arr);
}

printArray2(array);


/**
 * Recursive Sigma

Write a recursive function that given a number returns sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
 */
function rSigma(n){
  if(n <= 0){  
    return 0;
  }
  return n + rSigma(n -1); 
}
rSigma(5);

function getZero() {
  return 0;
}
