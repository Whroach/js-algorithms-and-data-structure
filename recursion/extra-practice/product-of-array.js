/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all
*/

function productOfArray(arr){
    let total = 1;
  
    function helper(val){
      if(val.length === 0) return;
  
      total *= val[0]
      helper(val.slice(1))
    }
    helper(arr);
  
    return total;
  }
  
  
  
  productOfArray([1,2,3]) // 6
  productOfArray([1,2,3,10]) // 60