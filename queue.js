function queue(){
    let collection = []
    this.print = () => {
        console.log(collection)
    }
    this.enqueue = element => {
        collection.push(element) //add to end of collection, if i want to add to beginning i would use unshift
    }
    this.dequeue = () => {
       return collection.shift() //removes element from beginning unlike stack which remove from end so
        //queue - fifo first in first out
        //stack - lifo last in first out
    }
    this.front = () => {
       return collection[0]
    }
    this.size = () => {
        return collection.length
    }
    this.isEmpty = () => {
        return collection.length === 0 ? console.log("IS EMPTY"): console.log("IS NOT EMPTY")
    }
    this.clear = () => {
        collection = []
    }
}

let q = new queue
q.isEmpty()
q.enqueue(100)
q.isEmpty()
q.print()
q.enqueue(50)
q.print()
console.log(q.front())
q.clear()
q.print()
q.enqueue(50)
q.print()
