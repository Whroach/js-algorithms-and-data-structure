let array = [5,3,4,1,2]


function selectionSort(arr){

  for(i=0; i < arr.length; i++){
    var lowest = i 
    for(j= i + 1; j < arr.length; j++){
      if(arr[j] < arr[lowest]){
        lowest = j
      }
    }

    var temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }

  return arr

}


selectionSort(array)