/*
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.
Otherwise, return -1.

This algorithm should be more efficient than linearSearch.

Examples:
    binarySearch([1,2,3,4,5], 2) // 1
    binarySearch([1,2,3,4,5], 6) // -1 
*/

function binarySearch(arr,num){

    let left = 0
    let right = arr.length - 1 
  
    while(left <= right){
      let middle = Math.floor((left + right) / 2)
  
      if(arr[middle] < num){
        left = middle + 1 
      }
      else if(arr[middle] > num){
        right = middle - 1
      }
      else{
        return middle
      }
  
    }
  
    return -1
  
  }

  binarySearch([1,2,3,4,5], 2) // 1
  binarySearch([1,2,3,4,5], 6) // -1 