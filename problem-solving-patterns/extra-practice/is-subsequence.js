/*
Write a function called isSubsequence which takes in two strings and checks whether the character in the first string
form a subsequence of the characters in the second string. In other words, the function should check whether the characters
in the first string appear somewhere in the second string, without their order changing.

Sample Input:
    isSubsequence('hello','hello world') //returns true
    isSubsequence('sing','sting') //returns true
    isSubsequence('abc','abracadaabra') //returns true
    isSubsequence('abc','acb') //returns false (order matters)

Solution MUST have AT LEAST the following complexities:
    Time Complexity - O(N + M)
    Space Comexplity - O(1)

*/

function isSubsequence(s,t) {
    if (s.length === 0) return true

    let sPointer = 0
    let tPointer = 0

    while (sPointer < s.length && tPointer < t.length) {
        if(s[sPointer] === t[tPointer]) sPointer++

        tPointer++
    }

    return sPointer === s.length
  }


  //solution 2

  function isSubsequence(str1, str2){
      let i = 0
      let j = 0

      if(!str1) return true

      while(j < str2.length){
          if(str2[j] === str1[i]) i++
          if(i === str1.length) return true
          j++
      }

      return false
  }


  //solution 3 - recursive but not O(1) Space
  function isSubsequence(str1, str2){

    //base cases
    if(str1.length === 0) return true
    if(str2.length === 0) return false

    //recursive cases
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))

    return isSubsequence(str1, str2.slice(1))

  }



  // isSubsequence('sing', 'sting')
  isSubsequence('abc', 'acb')