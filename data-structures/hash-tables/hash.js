

function hash(key, arrayLength){
    let total = 0

    for(let char of key){
        //map "a" to 1, "b" to 2, "c" to 3, etc.

        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLength
    }
    
    return total
}
/*problems with this current hash function
 1. Only hashes strings 
 2. Not constant time - linear in key length 
 3. Could be a little more random
*/
hash("pink", 10)


function hash(key, arrayLength){
    let total = 0
    let WEIRD_PRIME = 31

    for(let i = 0; i < Math.min(key.length, 100); i++){ //just for this example, we avoid hashing a string if it has a length greater than 100 so we can speed things up
        let char = key[i]
        let value = char.charCodeAt(0) - 96 //subtracting 96 is optional, just makes it easy to understand since it gives us the alphabetic numeric position of the character

        total = (total * WEIRD_PRIME + value) % arrayLength
    }

    return total
}

/*
Not the greatest but a improved solution to Hash Function

Still unclear on the exact reason why but when working with Hash function, it is best
to set the length of the hash array to be a prime number, according to a MIT studies. 
This will decrease the amount of collisons - where 2 values have the same index value.


*/

hash("hello", 13) //7   
hash("goodbye", 13) //9


/*
Dealing with Collisions

Even with a large array and a great hash function, collisions are inevitable

There are many strategies for dealing with collisions, but we'll focus on two:
    1. Separate Chaining
        - Not limited to amount of storing since we can create nested arrays and store items in the same index
    2. Linear Probing 
        - Limited to amount it can store since each item is stored in a unique index and can't go beyond the length of the array


Separate Chaining
    - With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list)
    - This allows us to store multiple key-value pairs at the same index

    Example:

    Index 1 - ['pink', '#ff69b4']
    Index 2 - [ ['darkBlue','#0008b'] , ['salmon','#fa8072'] ]  --> a nested array
    Index 3 - ['cyan', '#00ffff']


Linear Probing
    - With linear probing, when we find a collision, we search through the array to find the next empty slot.
    - Unlike with separate chaining, this allows us to store a single key-value at each index. --> ideal solution 

    Example:
    Index 1 - ['pink', '#ff69b4']
    Index 2 - ['darkBlue','#0008b']
    Index 3 -  Empty Slot
    Index 4 - Empty Slot

    ['cyan', '#00ffff'] --> 2 but Index 2 is not empty, so we look over to the next index and check to see if its empty for us to store this value

    Result: @Index 3 - ['cyan', '#00ffff']

*/



/*

let contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Jessie')
contacts.set('Will', {phone: "100-000-1000", address: "My Addy 2"})

contacts.get('Will')

contacts.size*/