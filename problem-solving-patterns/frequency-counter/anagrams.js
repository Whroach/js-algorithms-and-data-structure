function anagramsQuad(str1,str2){

    if(str1.length !== str2.length){
      return false;
    }
    let newStr1 = str1.split('')
    let newStr2 = str2.split('')
  
    for(el of newStr1){
      let foundChar = newStr2.indexOf(el)
  
      if(foundChar === -1){
        return false;
      }
      newStr2.splice(foundChar,1)
  
    }
  return true;
  
  }
  
  
  function anagramsLinear(str1,str2){
  
    if(str1.length !== str2.length){
      return false;
    }
  
    let obj1 = {}
    let obj2 = {}
    let arrStr1 = str1.split('')
    let arrStr2 = str2.split('')
  
    for(el of arrStr1){
      obj1[el] = (obj1[el] || 0) + 1
  
    }
  
    for(el of arrStr2){
      obj2[el] = (obj2[el] || 0) + 1
    }
  
    for(key in obj1){
      if(!(key in obj2 === true)){
        return false;
      }
      if(key in obj2 === obj1[key]){
        return false;
      }
  
    }
  
  return true;
  }
  
  
  // anagrams('cinema', 'iceman') //returns true
  // anagrams('aaz', 'zza') // returns false
  // anagrams('qwerty', 'qeywrt') //returns true
  // anagrams('textwisttime', 'timewisttext') // returns true
  // anagrams('rat','car') //returns false
  