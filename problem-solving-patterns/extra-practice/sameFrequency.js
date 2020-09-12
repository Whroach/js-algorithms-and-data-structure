/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers
have the same frequency of digits

Solution MUST have the following complexities
1. Time: O(N)

Sample Input: 
    sameFrequency(182,281) //returns true
    sameFrequency(34,14) //returns false
    sameFrequency(3589578, 5879385) //returns true
    sameFrequency(22, 222) //returns false

*/

function sameFrequency(num1,num2){

    if(num1.length !== num2.length) return false;
  
    let countObj = {}
    let countObj2 = {}
  
    for(el of num1.toString().split('')){
      countObj[el] = (countObj[el] || 0) + 1
    }
  
    for(el of num2.toString().split('')){
      countObj2[el] = (countObj2[el] || 0) + 1
    }
  
    for(key in countObj){
      if(countObj[key] !== countObj2[key]){
        return false
      }
    }
  
    return true
  
  }


  sameFrequency(182,281) //returns true
  sameFrequency(34,14) //returns false
  sameFrequency(3589578, 5879385) //returns true
  sameFrequency(22, 222) //returns false