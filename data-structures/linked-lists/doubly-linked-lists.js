class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    };

    push(val){
        let newNode = new Node(val)
        
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++

        return this
    };

    pop(){
        if(this.length === 0) return undefined

        let poppedNode = this.tail
        if(this.tail === this.head){
            this.head = null
            this.tail = null
        }else{
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null

        }
        this.length--

        return poppedNode.val

    };

    shift(){

        if(!this.head) return undefined
        let copyHead = this.head
        if(this.head === this.tail){
          this.head = null
          this.tail = null
        }else{
            this.head = copyHead.next
            this.head.prev = null
            copyHead.next = null
        }
  
        this.length--
        return copyHead.val
          
      };

      unshift(val){
        let newNode = new Node(val)
        let copyHead = this.head

        if(!this.head){
          this.head = newNode
          this.tail = newNode
        }else{
          copyHead.prev = newNode
          this.head = newNode
          this.head.next = copyHead
        }

        this.length++
        return this
      };

      get(index){

        if(index < 0 || index >= this.length) return null
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
  
        let count = 0
        let currentNode = this.head
  
        if(index <= this.length / 2){
  
          while(count < index){
            currentNode = currentNode.next
            count++
          }
        }
        else{
          currentNode = this.tail
          count = this.length - 1
  
          while(count > index){
            currentNode = currentNode.prev
            count--
          }
        }
        let prevNode = currentNode.prev
        let nextNode = currentNode.next
        nextNode.prev = prevNode
        prevNode.next = nextNode
        // currentNode.prev = null
        // currentNode.next = null
  
        return currentNode.val
  
      };

      set(index,val){
          let foundNode = this.get(index)

          if(foundNode != null){
              foundNode.val = val
              return true;
          }

          return false;

      };

      insert(index,val){
        if(index < 0 || index >= this.length) return null
        if(index === 0) return this.unshift(val)
        if(index === this.length - 1) return this.push(val)
        let newNode = new Node(val)
  
        let beforeNode = this.get(index - 1)
        let afterNode = beforeNode.next
  
        beforeNode.next = newNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        afterNode.prev = newNode
  
        this.length++
        return true;
      };

      remove(index){
        if(index < 0 || index >= this.length) return null
        if(index === 0 ) return this.shift()
        if(index === this.length - 1 ) return this.pop()
  
        let removeNode = this.get(index)
        removeNode.prev.next = removeNode.next
        removeNode.next.prev = removeNode.prev
        removeNode.next = null
        removeNode.prev = null
  
        this.length--
  
        return removeNode
      }
}


let list = new DoublyLinkedList()
list.push("Lebron James")
list.push("Kobe Bryant")
list.push("Michael Jordan")
list.push("Magic Johnson")
list.push("Larry Bird")
list.push("Hakeem Olajuwon")

list.pop()

list.push("William Roach")
list.shift()
list.shift()


list.unshift('Stephen Curry')
list.unshift('Kevin Durant')


list.get(3)
