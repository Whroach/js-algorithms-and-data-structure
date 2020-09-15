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