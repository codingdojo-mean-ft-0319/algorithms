
/**
 * String: In-Order Subsets

Create strSubsets(str) . Return an array with every possible in-order character subset of str. The resultant array itself need not be in any specific order – it is the subset of letters in each string that must be in the same order as they were in the original string. Given "abc" , return an array that includes ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (in any order).
 */

function strSubsets(str, str2 = "", arr = []){
  if(str === ""){
    arr.push(str2);
    return arr;
  } 
  const char = str.charAt(0);
  

  console.log(`str2 is ${str2}`);
  str = str.slice(1);
  
  strSubsets(str, str2, arr);
  return strSubsets(str, str2 + char, arr);
}

strSubsets("abc");


/**
 * String Anagrams

Given a string, return array where each element is a string representing a different anagram (a different sequence of the letters in that string). Example: if given "lim" , return ["ilm", "iml", "lim", "lmi", "mil", "mli"] . For this challenge, you can use built-in string functions such as split() .


 */