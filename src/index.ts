import ArrayQueue from './queue/array'
import LinkedQueue from './queue/list'
import CircularQueue from './queue/circular'

// const queue = new ArrayQueue()
// queue.enQueue(1)
// queue.enQueue(2)
// queue.enQueue(3)
// queue.enQueue(4)
// console.log(queue)


// const linkqueue = new LinkedQueue<number>(5)
// linkqueue.enQueue(1)
// linkqueue.enQueue(2)
// linkqueue.enQueue(3)
// linkqueue.enQueue(4)
// console.log(linkqueue.Front())
// console.log(linkqueue.size())

// console.log(linkqueue.deQueue())
// console.log(linkqueue.Front())
// console.log(linkqueue.deQueue())
// console.log(linkqueue.Front())
// console.log(linkqueue.clear())
// console.log(linkqueue.Front())

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



// const circularQueue = new CircularQueue(6); // 设置长度为 null
// console.log(circularQueue.enQueue(6));  // 返回 true
// console.log(circularQueue.Rear());  // 返回 6
// console.log(circularQueue.Rear());  // 返回 6
// console.log(circularQueue.deQueue());  // 返回 true
// console.log(circularQueue.enQueue(5));  // 返回 true
// console.log(circularQueue.Rear());  // 返回 5
// console.log(circularQueue.deQueue());  // 返回 true
// console.log(circularQueue.Front());  // 返回 -1
// console.log(circularQueue.deQueue());  // 返回 false
// console.log(circularQueue.deQueue());  // 返回 false
// console.log(circularQueue.deQueue());  // 返回 false
//  debugger
// const params = [ [6], [], [], [], [5], [], [], [], [], [], []];

const params = [[69],[],[92],[12],[],[],[],[],[],[28],[],[13],[45],[],[],[],[24],[27],[],[],[],[],[],[],[88],[],[],[],[],[],[],[53],[39],[],[28],[66],[17],[],[],[47],[],[87],[],[92],[94],[],[59],[],[],[99],[],[],[84],[],[],[],[52],[],[],[86],[30],[],[],[],[],[],[],[45],[],[],[83],[],[],[],[22],[77],[23],[],[],[],[14],[],[],[90],[57],[],[],[],[],[34],[],[],[],[],[],[],[],[49],[59],[],[71]]
const keys =  ["enQueue","deQueue","enQueue","enQueue","deQueue","isFull","isFull","Front","deQueue","enQueue","Front","enQueue","enQueue","Rear","Rear","deQueue","enQueue","enQueue","Rear","Rear","Front","Rear","Rear","deQueue","enQueue","Rear","deQueue","Rear","Rear","Front","Front","enQueue","enQueue","Front","enQueue","enQueue","enQueue","Front","isEmpty","enQueue","Rear","enQueue","Front","enQueue","enQueue","Front","enQueue","deQueue","deQueue","enQueue","deQueue","Front","enQueue","Rear","isEmpty","Front","enQueue","Front","deQueue","enQueue","enQueue","deQueue","deQueue","Front","Front","deQueue","isEmpty","enQueue","Rear","Front","enQueue","isEmpty","Front","Front","enQueue","enQueue","enQueue","Rear","Front","Front","enQueue","isEmpty","deQueue","enQueue","enQueue","Rear","deQueue","Rear","Front","enQueue","deQueue","Rear","Front","Rear","deQueue","Rear","Rear","enQueue","enQueue","Rear","enQueue"]

const  circularQueue = new CircularQueue(81);
// [true,6,6,true,true,5,true,5,true,true,true]
// [true,6,6,true,true,5,true,-1,false,false,false]
keys.forEach((item,index) => {
   
    const circularQueueParams = params[index]
    const cb = circularQueue[item].apply(circularQueue,circularQueueParams)
    
    console.log( 'item = ',item, ', params =', ...circularQueueParams ,' , value = ',cb)
})




