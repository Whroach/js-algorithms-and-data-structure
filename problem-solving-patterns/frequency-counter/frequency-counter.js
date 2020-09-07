/*
Frequency Counter Pattern - this pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or (O(N^2)) operations with arrays/strings


In the examples below, function called frequencySame should return true 
if every value in the array has its corresponding value squared in the
second array. The frequency of values must be the same.

sample cases:
1. frequencySame([1,2,3],[4,1,9]) => returns true
2. frequencySame([1,2,3],[1,9]) => returns false
3. frequencySame([1,2,1], [4,4,1]) => returns false (must be same frequency)

*/

function frequencySame(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)

        if(correctIndex === -1){
            return false;
        }

        
        //removing the matched squared value in arr2 in case of duplicate values in arr1
        arr2.splice(correctIndex,1)
    }

    return true && console.log(true)
}


/*Big-O notation is quadratic f(n) = n^2 or O(n^2))

Why? because we have a nested loop
    1. initial for loop
    2. indexOf() 

*/
frequencySame([1,2,3,2], [9,1,4,4])





//New and Better solution. Time complexity is now O(n) or linear because we removed the nested loop and replaced it with multiple single loops

function frequencySame(arr1, arr2){

    if(arr1.length !== arr2.length){
      return false;
    }
  
    let freqCounter1 = {}
    let freqCounter2 = {}
  
    for(let val of arr1){
      freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }
  
    for(let val of arr2){
      freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }
  
    for(let key in freqCounter1){
  
      if(!(key ** 2 in freqCounter2)){
        return false
      }
  
      if(freqCounter2[key ** 2] !== freqCounter1[key]){
        return false
      }
    }
  
    return true && console.log(true)
  
  }
  
  frequencySame([1,2,5,2], [4,1,4,25])