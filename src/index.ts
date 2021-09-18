import ArrayQueue from './queue/array'
import LinkedQueue from './queue/list'
import CircularQueue from './queue/circular'

const queue = new ArrayQueue()
queue.enQueue(1)
queue.enQueue(2)
queue.enQueue(3)
queue.enQueue(4)
console.log(queue)


const linkqueue = new LinkedQueue<number>()
linkqueue.enQueue(1)
linkqueue.enQueue(2)
linkqueue.enQueue(3)
linkqueue.enQueue(4)
console.log(linkqueue.Front())
console.log(linkqueue.size())

console.log(linkqueue.deQueue())
console.log(linkqueue.Front())
console.log(linkqueue.deQueue())
console.log(linkqueue.Front())
console.log(linkqueue.clear())
console.log(linkqueue.Front())
 
// for(const link of linkqueue){
//     debugger
//     console.log(link)
// }
// const first = linkqueue.Front()
 
// const circularQueue = new CircularQueue(3); // 设置长度为 3
// console.log(circularQueue.enQueue(1));  // 返回 true
// console.log(circularQueue.enQueue(2));  // 返回 true
// console.log(circularQueue.enQueue(3));  // 返回 true
// console.log(circularQueue.enQueue(4));  // 返回 false，队列已满
// console.log(circularQueue.Rear());  // 返回 3
// console.log(circularQueue.isFull());  // 返回 true
// console.log(circularQueue.deQueue());  // 返回 true
// console.log(circularQueue.enQueue(4));  // 返回 true
// console.log(circularQueue.Rear());  // 返回 4
//  debugger



// // ["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","Rear","isFull","deQueue","enQueue","Rear"]
// [[3],[1],[2],[3],[4],[],[],[],[4],[]]


// ["MyCircularQueue",
// "enQueue",
// "Rear",
// "Rear",
// "deQueue",
// "enQueue",
// "Rear",
// "deQueue",
// "Front",
// "deQueue",
// "deQueue"
// "deQueue"]
// [[6],[6],[],[],[],[5],[],[],[],[],[],[]]

// [null,true,6,6,true,true,5,true,0,false,false,false]
// [null,true,6,6,true,true,5,true,-1,false,false,false]



const circularQueue = new CircularQueue(6); // 设置长度为 null
console.log(circularQueue.enQueue(6));  // 返回 true
console.log(circularQueue.Rear());  // 返回 6
console.log(circularQueue.Rear());  // 返回 6
console.log(circularQueue.deQueue());  // 返回 true
console.log(circularQueue.enQueue(5));  // 返回 true
console.log(circularQueue.Rear());  // 返回 5
console.log(circularQueue.deQueue());  // 返回 true
console.log(circularQueue.Front());  // 返回 -1
console.log(circularQueue.deQueue());  // 返回 false
console.log(circularQueue.deQueue());  // 返回 false
console.log(circularQueue.deQueue());  // 返回 false
 debugger