/**
 * Flatten a given array, eliminating nested & empty arrays. 
 * Do not alter it; return a new one retaining order. For [1,[2,3],4,[]] return [1,2,3,4] .
 */

function flatten(arr) {
  // edge case: if empty array fast fail
  // if (!arr.length){
  //   return arr
  // }
  // edge case: if not an array fast fail
  if (Array.isArray(arr) === false){
    throw new Error("this is not an array, cannot flatten")
  }
  // define new arr
  var newarr = [];
  // loop through array
  for (var i=0; i<arr.length; i++){
  // look for whether it's an array
    if (Array.isArray(arr[i])){
  // if so, loop through that array and push to new arr   
      for (var j=0; j<arr[i].length; j++){
        newarr.push(arr[i][j])
        console.log("inside inner loop"+arr[i][j])
        console.log(newarr)
      }   
    }
    else {
      newarr.push(arr[i]);
      console.log(newarr)
    }
  }
  return newarr
}

var nested = [1,[2,[[3]] ],4,[]];

function flatten2(arr, newarr) {
  console.log('arr is ', arr);
  console.log('newarr is ', newarr);
  if (Array.isArray(arr) === false){
    throw new Error("this is not an array, cannot flatten")
  }

  // if (newarr === undefined) {
  //   newarr = [];
  // }
  newarr = newarr || [];

  for (var index = 0; index < arr.length; index++) {
    var currentValue = arr[index];
// var nested = [1,[2,[[3]] ],4,[]];

    console.log('current value is ', currentValue);

    if (Array.isArray(currentValue)) {
      console.log('found array ')
      // [2,[[3]] ] ---  [1, 2, 3] -- 
      // [[3]] --- [1, 2, 3]
      // [3] -- [1, 2, 3]
      flatten2(currentValue, newarr);
    } else {
      // [1,2,3, 4]
      newarr.push(currentValue);
    }
  }
  

  return newarr;
}


console.log(flatten([]))
console.log(flatten2(nested))

