/*
Sliding Window Pattern - this pattern involves creating a window which can either be an array or number from 
one position to another. 

Depending on a certain condition, the window either increases or closes (and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc.


1. Below we write a function called maxSub which accepts an array of integers and a number caled n.
The function should calculate the maximum sum of n consecutive elements in the array.
*/


//does not need to be sorted

function maxSub(arr,num){
  if(num > arr.length){
    return null;
  }

  var max = -Infinity

  for(let i=0; i < arr.length - num + 1; i++){
    temp = 0;
    for(let j=0; j < num; j++){
      //j < num means we want to look ahead by 3 elements
      temp += arr[i+j];
    }
    if(temp > max){
      max = temp;
    }
  }

return max;
}




  function maxSub(arr,num){
    let maxSum = 0;
    let tempSum =0;

    if(arr.length < num) return null;
    
    //add the first 3 elements in the array
    for(let i = 0; i < num; i++){
      maxSum += arr[i]
    }
    
    tempSum = maxSum;

    for(let i = num; i < arr.length; i++){
      tempSum = tempSum - arr[i-num] + arr[i]

      maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum
  }

  //this solution is better because instead of recounting all the digits in the array,
  //we can simply subtract the first digit in the previous subarray and then add the next digital to it, which line 55 is doing.



  
  maxSub([2,6,9,2,1,8,5,6,3], 3) // returns 19