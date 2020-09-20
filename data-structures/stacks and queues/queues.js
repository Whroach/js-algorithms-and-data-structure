//Example of Queues using an Array

//FIFO - First In, First Out
let q = []

q.push('red')
q.push('black')
q.push('green')
q.push('gold')

//[red, black, green, gold]

q.shift() //red
q.shift() //black

q.push('blue')

q.shift() //green




//Example of Queues using a Class

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Queue{
    constructor(){

        this.first = null;
        this.last = null;
        this.size = 0
    }

    enqueue(val){
        let newNode = new Node(val)

        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        return this.size++

    };

    dequeue(){

        if(!this.first) return null
        let copyFirst = this.first

        if(this.first === this.last){
            this.last = null
        }

        this.first = this.first.next
        this.size--

        return copyFirst.val

    }
}