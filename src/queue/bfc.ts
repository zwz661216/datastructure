import {LinkedQueue} from "./list"
let root = {
    key: 1,
    children: [
        {
            key:2,
        },
        {
            key:3,
            children:[
                {
                    key:4,
                }
            ]
        }
    ]
} // 数据源


class BFC{
    #step:0
    queue:LinkedQueue<unknown>
    constructor(root:unknown,target){
        this.queue = new LinkedQueue()
        this.queue.enQueue(root)
    }
    forEach(){
        const size = this.queue.size()
        for(let i =0;i++;i<size){
            let cur = this.queue.Front()  // 获取队首元素
        }
    }
}