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
      console.log(collection[0] + " is the first element" )
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
let q = new queue //instance of queue
q.enqueue(100) // adding to the end of empty array, so first element
q.front() //logging the first element
q.enqueue(1000) //adding to the end of array
q.front()//100 is the first element
q.dequeue()//remove from the front so now 1000 is the first and only element
q.front() //1000
q.print()
