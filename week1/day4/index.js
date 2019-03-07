/**
 * You will be given a numerical array that has first been sorted, then rotated by an unknown amount. Find and return the minimum value in that array. Don’t use built-in functions (surprise!). Given the input array ["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"] , you should return "Anna" . Remember, do not linearly iterate the array!
 */

function minRotated(arr) {
  var start = 0;
  var end = arr.length;
  var midpoint = Math.floor(arr.length/2);
  do{ 
    if(arr[start]< arr[midpoint]){
      start = midpoint;
      console.log("new start is" + start );
    }
    else{
      end = midpoint;
      console.log("this is the new end"+ end);
    }
    midpoint = Math.floor((end+start)/2);
    console.log("this is the new midpoint"+ midpoint);

  }while( end - start > 1 );
  return arr[end];
  console.log("all the positions are now" + start + " " + midpoint + " "+ end + " " + arr[end]);

  //iterate through array
  // determine which is the lowest value by using 
  //find the value of the first index of all the strings


}
console.log('anne' < 'thurber');

var rotated = ["Gigli","Jay is cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"];
var rotated = [9,1,2,3,4,5,6,7,8];
minRotated(rotated);
