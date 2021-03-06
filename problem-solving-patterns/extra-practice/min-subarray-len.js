/*
Write a function called minSubArrayLen which accepts two paramters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer
passed to the function. If there isn't one, return 0 instead.

Examples: 
    minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
    minSubArrayLen([2,1,6,5,4], 9) //2  -> because [5,4] is the smallest subarray
    minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) //1  -> because [62] is greater than 52
    minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) // 3
    minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) //5
    minSubArrayLen([4,3,3,8,1,2,3], 11) //2
    minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) //0

Constraints: 
    Time Comexplity - O(n)
    Space Comexplity - O(1)

*/


function minSubArrayLen(arr,num){

    if(arr.length < 1) return false;
  
    let min = -Infinity
    let temp;
  
    for(var i = 0; i < arr.length; i++){
      let sum = 0;
      let count = 0;
  
      if(num > sum){
        if(arr[i] < num){
          sum += arr[i]
          count+=1
        }else if(arr[i] >= num){
          return 1
        }
      }

    }
  
  
    return min
  
  }


  //still working on this possible solution

  function minSubArrayLen(arr,num){

    if(arr.length < 1) return false;
    if(arr.length == 1 && arr[0] >= num) return 1

    let min = 0 
    let current = 0
    let count = 0

    for(var i = 0; i < arr.length; i++){
      if(arr[i] >= num) return 1

      if(current >= num){
        !min ? min = count : min = Math.min(min, count)
        count = 0
      }
      else if(arr[i] < num){
        current+= arr[i]
        count++
      }

    }
    return min

  }