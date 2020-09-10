/*
We want to write a function called power which accepts a base and exponent.
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow(). 

*/


function power(base,expo){

    //base point or end point
    if(expo === 0) return 1;
  
    return base * power(base,expo - 1)
  
    //this is the expected action of this recursion --> 2 * 2 * 2 * 2
  }
  
  power(2,0) // 1
  power(2,2) // 4
  power(2,4) // 16