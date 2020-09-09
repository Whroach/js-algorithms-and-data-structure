/*
Divide and Conquer Pattern - this pattern invovles dividing a data set into smaller
chunks and then repeating a process with a subset of data.

This pattern can tremendously decrease time complexity

1. Below, given a sorted array of integers, write a function called search, 
that accepts a value and returns the index where the value passed to the function is located.
If the value is not found, return -1

*/

const search = (arr,val) =>{
    for(let i=0; i < arr.length; i++){
        if(arr[i]===val){
            return i && console.log(i);
        }
    }
    return -1 && console.log(-1);

}
//Linear Search - time complexity = O(N)



const search =(array,val)=>{
    let min=0;
    let max= array.length -1;

    while (min <= max){
        let middle = Math.floor((min + max) / 2);


        if(array[middle] < val){
            min = middle + 1
        }
        else if(array[middle] > val){
            max = middle -1
        }
        else{
            return middle
        }
    }
    return -1;

}

//Time Complexity - Log(N) - Binary Search




search([1,2,3,4,5,6],4) // returns 3

