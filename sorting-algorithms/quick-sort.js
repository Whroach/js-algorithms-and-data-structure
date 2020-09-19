

function quickSort(arr){

    if(arr.length === 1) return arr;
  
    const pivot = arr[arr.length - 1]; //pivot will be the element at the end of the array

  
    const leftArray = []
    const rightArray = []
  
    for(let i=0; i < arr.length - 1; i++){
      if(arr[i] < pivot){
        leftArray.push(arr[i])
      }
      else{
        rightArray.push(arr[i])
      }
    };
  
    if(leftArray.length > 0 && rightArray.length > 0){
      return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
    }
    else if(leftArray.length > 0){
      return [...quickSort(leftArray), pivot]
    }
    else{
      return [pivot, ...quickSort(rightArray)]
    }
  
  
  
  }
  
  let array = [6,3,9,5,2,1,10,4,2,11,22,15,13,30,19,7,8]
  
  
  quickSort(array)