//Example of Stacks using Arrays

//LIFO - Last In, First Out
let stacks = []

stacks.push('Lionel Messi')
stacks.push('Cristano Ronaldo')
stacks.push('Christian Pulistic')
stacks.push('Kevin Prince Boateng')  

stacks.pop() // Kevin Price Boateng
stacks.pop() // Christian Pulistic

stacks.push('Kylian Mbappe')

stacks.pop() //returns Kylian Mbappe instead of Cristiano Ronaldo because that was the last node pushed onto the stacks



//Example of Stacks using Linked List

class Node{
    constructor(val){

        this.val = val
        this.next = null
    }
}

class Stacks{
    constructor(){

        this.first = null
        this.last = null
        this.size = 0
    };

    push(val){

        let newNode = new Node(val)

        if(!this.first){
            this.first = newNode
            this.last = this.first
        }

        let copyPrev = this.first
        this.first = newNode
        this.first.next = copyPrev

        return this.size++

    };

    pop(){

        if(this.size <= 0) return null

        let firstNode = this.first

        if(this.first === this.last){
            this.last = null
        }

        this.first = this.first.next
        this.size--
        

        return firstNode.val
    };

    
}

let stacks = new Stacks()


stacks.push('Lionel Messi')
stacks.push('Cristano Ronaldo')
stacks.push('Christian Pulistic')
stacks.push('Kevin Prince Boateng')  

stacks.pop() // Kevin Price Boateng
stacks.pop() // Christian Pulistic

stacks.push('Kylian Mbappe')

stacks.pop() //returns Kylian Mbappe instead of Cristiano Ronaldo because that was the last node pushed onto the stacks