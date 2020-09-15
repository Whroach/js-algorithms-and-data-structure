/*
Write a recursive function called isPalindrome which returns true
if the string passed to it is a palindrome (reads the same forward and backward).
Otherwise it returns false.

 */

 //pure recursion
 function isPalindrome(str) {
  // base case
  if (str.length === 0 || str.length === 1) return true;

  // recursive case
  return (str[0] === str[str.length-1])
    ? isPalindrome(str.substring(1, str.length-1))
    : false;
}



//solution using recursive helper function
function isPalindrome(str){
    let reverseStr = ""

    function helper(str){
        if(str === "") return "";
        return reverseStr += helper(str.substr(1)) + str.charAt(0)
    }
    helper(str)

    return reverseStr === str
}



//solution using built in methods
function isPalindrome(str){
    let reverse = str.split('').reverse().join('')
    return str === reverse
}



//solution using for loop
function isPalindrome(str){
    let reverseStr = ''
  
    for(i= str.length - 1; i >= 0; i--){
      reverseStr += str[i]
    }
  
    return reverseStr === str
  
  
  }


isPalindrome('awesome') // false
isPalindrome('foobar') // false
isPalindrome('tacocat') // true
isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false