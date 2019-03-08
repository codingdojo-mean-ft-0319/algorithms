
/**
 * Remove array duplicates. Do not alter original. Return new array with results ‘stable’ (original order). For [1,2,1,3,4,2] return [1,2,3,4] .
 */

function removeDupes(arr) {
  var newarr = [];
  for (var i = 0; i < arr.length; i++){
    // [1,2,1,3,4,2]
    // current val 3
    //[1, 2]
    // i 3
    // j 0
    for(var j= 0; j < i; j++){
      if(newarr[j]=== arr[i]){
        break;
      }
    }

    console.log(`j is ${j} and i is ${i}`);
    if( i === j){
      console.log('pushing');
      newarr.push(arr[i]);
    }
  }
  console.log(newarr);

}

function removeDupes2(arr) {
  var newarr = [];
  var dupeCount = 0;
  for (var i = 0; i < arr.length; i++){
    // [1,2,1,3,4,2]
    // current val 3
    //[1, 2]
    // i 3
    // j 0
    for(var j= 0; j < newarr.length; j++){
      if(newarr[j]=== arr[i]){
        dupeCount += 1;
        break;
      }
    }

    console.log(`j is ${j} and i is ${i}`);
    if( i === j + dupeCount){
      console.log('pushing');
      newarr.push(arr[i]);
    }
  }
  console.log(newarr);

}

function removeDupes3(arr){
  var dupeCount = 0
  for(var i = 0; i < arr.length; i++){
  // [1,2,3,4,4,2]
  // [1,2,1,1,1,2]
  // current val 3
  // dC 1
  // i 3
  // j 3
    for(var j = 0; j < i; j++){
      if(arr[i]===arr[j]){
        dupeCount += 1;
        break;
      }
    }
    if(i === j){
      arr[i - dupeCount]= arr[i];

    }
  }
  arr.length= arr.length - dupeCount;
  console.log(arr);
}

var dupes = [1,2,1,3,4,2];

removeDupes3(dupes);