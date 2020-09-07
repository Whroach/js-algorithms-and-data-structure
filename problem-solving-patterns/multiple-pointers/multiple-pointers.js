
/* 
Multiple Pointers - creating pointers or values that correspond to an index or position
and move towards the beginning, end or middle based on a certain condition

Very efficient for solving problems with minimal space complexity


1. Below, we write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0. Return an array that includes
both values that sum to zero or undefined if a pair does not exists

*/



function sumZero(arr){
    for(let i =0; i < arr.length; i++){
      // console.log(i+1)
      for(let j = i + 1; j < arr.length; j++){
        console.log(arr[j])
        if(arr[i] + arr[j] === 0){
  
          return console.log([arr[i], arr[j]]);
        }
      }
    }
  }

  //Time complexity is O(N^2) and Space Complexity is O(1)
  
  
  
  function sumZero(arr){
    let left = 0; 
    let right = arr.length - 1; //7
  
    while(left < right){ // 0 < 7
      let sum = arr[left] + arr[right];
      //sum = (-4 + 5) => 1
  
      if(sum === 0){
        return console.log([arr[left], arr[right]]);
      }else if(sum > 0){
        right-- //if right is greater than left, it means the value is greater than 0.
      }else{
        left++
      }
  
    }
  }

  //Time complexity is O(N) and Space Complexity is O(1)



  
  sumZero([-4,-3,-2,-1,0,1,2,5]) //returns [-2,2]
  sumZero([-2,0,1,3]) //returns undefined 