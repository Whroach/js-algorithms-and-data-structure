/*
1. Implement a function called uniqueValues, which accepts a sorted array,
and counts the unique values in the array. There can be negative numbers in the array
but it will always be sorted.

*/

function uniqueValues(arr){

    if(arr.length ===0) return 0;

    let p1 = 0
    let p2 = 1
  
    while(p2 <= arr.length){
      if(arr[p1] === arr[p2]){
        p2+=1
      }else if(arr[p1] !== arr[p2]){
        arr[p1 + 1] = arr[p2]
        p1+=1
        p2+=1
      }
    }
    arr.splice(p1)

    return arr.length
  }

  //Time Complexity - O(n)
  //Space Comexplity - O(n)
  

  function uniqueValues(arr){
      if(arr.length === 0) return 0;

      var i = 0;

      for(var j = 1; j < arr.length; j++){
          if(arr[i] !== arr[j]){
              i++
              arr[i] = arr[j]
          }
      }

      return i + 1
  }
  
  //Time Complexity - O(n)





  uniqueValues([1,1,1,2,5,8,20,20,20, 200,700,700]) //7
  uniqueValues([-2,-1,-1,0,1]) //4

