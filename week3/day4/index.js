/**
 *  Recursive Binary Search 
 * 
 * Given a sorted array and a value, recursively determine whether value is found within array. rBinarySearch([1,3,5,6],4) = false ; rBinarySearch([4,5,6,8,12],5) = true .
 */
let count = 0;
function rBinarySearch(arr, val, start = 0, end = arr.length ){
  
  if( start >= end){
    console.log("returning false");
    return false;
  }
  console.log(`start is ${start} and end is ${end}`)

  if (++count > 100) throw new Error('whoops');

  const midpoint = Math.floor((start + end)/2);
  if( arr[midpoint] === val){
    console.log(`returning true`, midpoint);
    return true;
  }
  if(arr[midpoint] < val){
    start = midpoint + 1;
  }
  else{
    end = midpoint;
  }
  return rBinarySearch(arr,val,start,end);


}

rBinarySearch([4,5,6,8,12],5)


/**
 * Binary String Expansion

You are given a string containing chars ‘ 0 ’, ‘ 1 ’, and ‘ ? ’. For every ‘ ? ’, either ‘ 0 ’or ‘ 1 ’ can be substituted. Write a recursive function to return array of all valid strings with ‘ ? ’ chars expanded to ‘ 0 ’or ‘ 1 ’. binStrExpand("1?0?") => ["1000","1001","1100","1101"] . If you use string functions such as slice() , use them sparingly, as they are expensive.
 * 
 */

function binStrExpand(string, arr = []){
  const ind = string.indexOf('?')
  if( ind < 0){
    arr.push(string);
    return arr;
  }
  const end = string.slice(ind +1);
  const start = string.slice(0, ind);
  console.log(end);
  console.log(start);
  const ns = `${start}1${end}`;
  const anos = `${start}0${end}`;
  binStrExpand(ns, arr);
  return binStrExpand(anos, arr)
  


}
binStrExpand("01?0??")

