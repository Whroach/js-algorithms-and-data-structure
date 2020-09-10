//writing Factorial Recursively

function factorial(num){
    if(num === 1) return 1;

    return num * factorial(num-1);
    
}





//writing Factorial Iteratively

function factorial(num){
    let total = 1;

    for(let i = num; i > 1; i--){
        total *= 1
    }
    return total
}


factorial(4) //returns 24