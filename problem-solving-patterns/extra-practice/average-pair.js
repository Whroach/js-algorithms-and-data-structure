/*
Write a function called averagePair. Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of pair
equals the target average. There may be more than one pair that matches the average target.

Constraints: 
Time - O(N)
Space - O(1)

Sample Input:
    averagePair([1,2,3],2.5) // returns true
    averagePair([1,3,3,5,6,7,10,12,19], 8) //returns true
    averagePair([-1,0,3,4,5,6], 4.1) //returns false
    averagePair([], 4) //returns false

*/

//multiple-pointer pattern

function averagePair(arr,num){

    if(arr.length === 0) return false;
  
    let p2 = 1;
  
    if(num % 2 === 0){
     for(var i = 0; i < arr.length; i++){
      let sum = arr[i-1] + arr[p2]
  
      if(sum / 2 === num){
        return true;
      }
      p2++
    }
   }else{
      for(var i = 0; i < arr.length; i++){
      let sum = arr[i] + arr[p2]
  
      if(sum / 2 === num){
        return true;
      }
      p2++
  
    }
   }
  
    return false;
  }



  averagePair([1,2,3],2.5) // returns true
  // averagePair([1,3,3,5,6,7,10,12,19], 8) //returns true
  // averagePair([-1,0,3,4,5,6], 4.1) //returns false
  // averagePair([], 4) // returns false