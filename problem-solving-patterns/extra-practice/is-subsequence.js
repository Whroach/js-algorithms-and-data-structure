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



  // isSubsequence('sing', 'sting')
  isSubsequence('abc', 'acb')