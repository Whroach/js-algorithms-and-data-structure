/*

Write a function factorial which accepts a number and returns the factorial of that number.
A factorial is a product of an integer and all the integers below it.

Example: factorial (4!) is equal to 24, because 4 * 3 * 2 * 1 = 24. 

Factorial zero (0!) is always 1.

*/

function factorial(num){
    //base or end point to stop recursion
    if(num === 0) return 1;
  
    return num * factorial(num-1)
     
  }
  
  
  factorial(1) // 1
  factorial(2) // 2
  factorial(4) // 24
  factorial(7) // 5040