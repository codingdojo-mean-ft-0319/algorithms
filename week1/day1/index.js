
function average(arr){
  var total = sum(arr);

  return (total/arr.length);
}

function sum(arr){
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
}

var array = [1,2,3,4];

console.log(average(array));
console.log(array);

/**
Write a function that returns whether the given array 
has a balance point between indices, 
where one side’s sum is equal to the other’s. 
Example: [1,2,3,4,10] → true ( between indices 3&4 ), 
but [1,2,4,2,1] → false .
*/

function balancePoint(array) {
  var total = 0;
  var sum = 0;
  
  console.log(glob);
  
  for (var index = 0; index < array.length - 1; index++) {
    // set total to array at index
    total += array[index];
    sum = 0;
    // sum rest of array
    for (var inner = index + 1; inner < array.length; inner++) {
//       console.log('sum is ' + sum);
      sum += array[inner];
    }
    // compare rest and total
//     console.log('total is '  + total + ' and sum is ' + sum); 
    if (sum === total) {
      return true;
    }
  }
  
  return false;
}

console.log(balancePoint([1,2,3,4,10]));
// console.log('1' === 1);




function balancePoint2(array) {
  var total = 0;
  var rest = sum(array);
  
  for (var index = 0; index < array.length - 1; index++) {
    // set total to array at index
    var amount = array[index];
    total += amount;
    rest -= amount;
    
    if (rest === total) {
      return true;
    }
  }
  
  return false;
}

/**
Here, a balance point is on an index, not between indices. 
Return the balance index where sums are equal on either side 
(exclude its own value). Return -1 if none exist. 
Ex.: [-2,5,7,0 3] → 2 , but [9,9] → -1 
*/


function balanceIndex(array) {
  var total = array[0];
  var rest = 0;
  
  for (var index = 1; index < array.length - 1; index++) {
    
    rest = 0;
    for (var inner = index + 1; inner < array.length; inner++) {
      rest += array[inner];
    }
    
    if (rest === total) {
      return index;
    }
    
    total += array[index];
  }

  return -1;
}

console.log(balanceIndex([-2,5,7,0, 3]));
