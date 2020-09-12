/*
Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists.
If the value does not exist in the array, return -1.

Examples: 

    linearSearch([10,15,20,25,30], 15) // 1
    linearSearch([100], 200) // -1
*/

function linearSearch(arr,num){
    let result;
    
    arr.filter((element,index)=>{

  if(element === num){
    result = index
  }
})

return result !== undefined || null ? result : -1



}