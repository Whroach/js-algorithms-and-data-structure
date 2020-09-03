/*in this example, function called frequencySame should return true 
if every value in the array has its corresponding value squared in the
second array. The frequency of values must be the same.

sample cases:
1. frequencySame([1,2,3],[4,1,9]) => returns true
2. frequencySame([1,2,3],[1,9]) => returns false
3. frequencySame([1,2,1], [4,4,1]) => returns false (must be same frequency)



*/

function frequencySame(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)

        if(correctIndex === -1){
            return false;
        }

        
        //removing the matched squared value in arr2 in case of duplicate values in arr1
        arr2.splice(correctIndex,1)
    }

    return true && console.log(true)
}


frequencySame([1,2,3,2], [9,1,4,4])