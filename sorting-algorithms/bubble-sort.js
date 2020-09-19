/*
BubbleSort Pseudocode
    1. Start looping from the end of the array towards the beginning with a variable called i.
    2. Start an inner loop with a variable called j from the beginning until i - 1
    3. If arr[j] is greater than arr[j+1], swap those two values.
    4. Return the sorted array

*/

//Not the best solution
function bubbleSort(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            
            if(arr[j] > arr[j+1]){
                var temp = arr[j];

                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }

    return arr
}

//better solution

function bubbleSort(arr){
    let noSwaps;

    for(var i = arr.length; i > 0; i--){
        // //outer loop starts at the end because we know that after each iteration in the nested loop, all the larger numbers will move to the end of the array.
        //Then we can shrink the right side of this outer loop so that the inner loop can ignore the last index of the previous iteration
        noSwaps = true;

        for(var j = 0; j < i - 1; j++){

            if(arr[j] > arr[j+1]){

                var temp = arr[j]

                arr[j] = arr[j+1]
                arr[j+1] = temp

                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }

    return arr

}


//ES6 version

function bubbleSort(arr){
    let noSwaps;

    const swap = (arr,idx1, idx2) =>{
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j =0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                swap(arr, j, j + 1)

                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    
    return arr;

}


//If array is nearly sorted, then Time Complexity is nearly O(N)....else O(N^2) due to nested loops



//do-while loop
function bubbleSort(arr){

    if(arr.length <= 1) return arr;
  
    let swapped;
  
    do{
      swapped = false;
      for(i=0; i < arr.length; i++){
  
        if(arr[i] > arr[i + 1]){
          let copyCurrentVal = arr[i]
          arr[i] = arr[i+1]  //swap smaller number with bigger number
          arr[i+1] = copyCurrentVal  //swap bigger number with smaller number
          swapped = true;
        }
      }
  
    }while(swapped) //this will continue to stay truthy as long as we swap 2 values during the loop. If no swap was done then swapped variable is still false and while loop cancels, which means the array is sorted.
  
    return arr
  }
  
  
  let array = [6,3,9,5,2,1,10,4]
  
  
  bubbleSort(array)