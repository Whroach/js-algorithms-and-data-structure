/*
Write a recursive function called flatten which accepts an array of arrays
and returns a new array with all values flattened

Example: 

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

 */


function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){ 
          if(oldArr[i].constructor === Array){ // or Array.isArray(oldArr[i])
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }


flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]


const arr = [1,2,3,[4,5,[6,7,8,9],10,11]]

function flatten(arr, d = 1) {
    console.log(d)
  
     return d > 0
  
     ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val, d - 1) : val), [])
  
     : arr.slice();
  
  };
  
  flatten(arr, Infinity);
  // [1, 2, 3, 4, 5, 6]