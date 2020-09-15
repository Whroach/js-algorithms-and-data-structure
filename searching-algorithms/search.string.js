/*
Pseudocode

1. Loop over the longer string
2. Loop over the shorter string (nested/inner loop)
3. If the characters don't match, break out of the inner loop
4. If the characters do match, keep going
5. If you complete the inner loop and find a match, increment the count of matches
6. Return the count

*/

function searchStr(long, short){
    let count = 0

    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
            if(short[j] !== long[i+j]){
              break;
            }

            if(j === short.length - 1){
              count++
            }
        }
    }
    return count
}


 searchStr('do you believe in miracles?', 'believe') // returns 1