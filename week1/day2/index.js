
/**
 * Recreate the function built into JavaScript's array
object. Efficiently shuffle a given array's values. Do
you need to return anything from your function?
 */

function shuffle(arr) {
  //verify if array
    if (Array.isArray(arr) === false){
      throw new Error("this is not an array, cannot shuffle")
    }
  //for loop to go through array
    for (var i=0; i<arr.length; i++){
  //math.random with curr index within the context of the arrays length 
      var curr = arr[i];
      var random = Math.floor(Math.random()*arr.length);
      console.log(random);
      arr[i] = arr[random];
  
  //swap random index with current index
      arr[random] = curr
  
  //don't need to return anything since a change to object will change it permanently without a return
    }
  }
  var unshuffled = [4,13,7,4,67,91,51, 87];
  shuffle(unshuffled)
  console.log(unshuffled)
  
  // console.log(Array.isArray('unshuffled'));
  
  // var ob = {
  //   thing: 'has value'
  // }
  
  // if (typeof ob.thing1 === 'undefined') {
  //   console.log('no value')
  // }
  
  /**
   * Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array. Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted . As always, only use built-in functions that you are prepared to recreate (write yourself) on demand!
   */
  
  
  function binarySearch(arr, val) {
  //given a number, look via while loop to see if at halfway of array (start index, midpoint index, end index) whether it's bigger or smaller
    var count = 0;
    var start = 0;
    var end = arr.length;
    var midpoint = Math.floor(arr.length/2);
    while (start < end){
  
      if (++count > 100) {
        throw new Error('whoops');
      }
  
      if (val === arr[midpoint]){
        return true;
        }
      if(val < arr[midpoint]){
        //move left
        end = midpoint;
      }
      else {
        //move right
  
        start = midpoint+1;
        }
      midpoint = Math.floor((end+start)/2)
  
        console.log(start)
        console.log(midpoint)
        console.log(end)
    }
  //if number is bigger, look right
  //if number is smaller, look left
  //update index, look again at halfway point and redo lines 48 49
  //if found, re  turn :)
  return false
  }
  
  var numbers = [1,5,8,11,23,28,35];
  binarySearch(numbers, 29)
  