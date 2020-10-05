class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size)
    };

    _hash(key){
        let total = 0
        let WEIRD_PRIME = 31

        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96

            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }

        return total
    }

    /*
    SET
    1. Accepts a key and a value
    2. Hashes the key
    3. Stores the key-value pair in the hash table array via separate chaining
    */

    set(key,value){
        let index = this._hash(key)

        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key,value])

    };


    /*
    GET
    1. Accepts a key
    2. Hashes the key
    3. Retrieves the key-value pair in the hash table
    4. If the key isn't found, return undefined/false/null or whatever to indicate item wasn't found
    */

    get(key){
        let index = this._hash(key)

        if(this.keyMap[index]){

            for(let i = 0; i < this.keyMap[index].length; i++){ //looping through the nested array
                if(this.keyMap[index][i][0] === key){ //is your key EQUAL to my key or the key i am looking for?
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    };

    values(){
        let valuesArr = []

        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    //handling duplicate values
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }

        return valuesArr //returns all the values
    };

    keys(){
        let keysArr = []

        for(let i = 0; i < this.keyMap.length; i++){

            if(this.keyMap[i]){

                for(let j = 0; j < this.keyMap[i].length; j++){

                    //handling duplicate values
                    if(!keysArr.includes(this.keyMap[i][j][0])){

                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }

        return keysArr //returns all the keys
    };


}


let ht = new HashTable()
ht.set("hello world", "goodbye!!")
ht.set("dogs","are cool")
ht.set("cats", "are fine")
ht.set("i love", "pizza")
ht.set("maroon", "#80000")
ht.set("yellow", "#FFFF00")
ht.set("plum", "#DDA0DD")
ht.set("violet", "DDA0DD")

ht.get("yellow")
ht.get("red") //undefined 


ht.keys().forEach((key)=>{
    console.log(ht.get(key))
})



/*

BIG O of HASH TABLES (average case)
    - Insert: O(1)
    - Deletion: O(1)
    - Access: O(1)


*/