/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments,
and checks whether there are any duplicates among the arugments passed in. You can solve this
using the frequency counter pattern OR the multiple pointers pattern

Sample:
    areThereDuplicates(1,2,3) returns false
    areThereDuplicates(1,2,2) returns true
    areThereDuplicates('a','b','c','a') returns true

Restrictions: 
Time - O(n)
Space - O(n)

*/


//since this function accepts a variable number of arguments or an unknown amount, we can just destructure the paramter and set it to an array

//frequency pattern solution
function areThereDuplicates(...val){

    let obj = {}
  
    for(var el of val){
      obj[el] = (obj[el] || 0) + 1
    }
  
  
    for(var key in obj){
      if(obj[key] > 1){
        return true;
      }
    }
  
    return false;
  
  
  }


//multiple pointers solution

function areThereDuplicates(...val){

    val.sort((a,b) => a > b)
    let p1 = 0;
    let p2 = 1;

    while(p2 < val.length){
        if(val[p1] === val[p2]){
            return true;
        }
        p1++
        p2++
    }
    return false;

}

  areThereDuplicates(1,2,3)
areThereDuplicates('a','b','c','a')
areThereDuplicates(1,2,2)