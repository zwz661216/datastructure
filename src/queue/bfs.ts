import { LinkedQueue } from "./list"
interface BFSProps{
    key:string
    children?:BFSProps[]
}
const E:BFSProps = {
    key: 'E',
}

const G:BFSProps = {
    key: 'G',
}
const root:BFSProps = {
    key: 'A',
    children: [
        {
            key: 'B',
            children: [E]
        },
        {
            key: "C",
            children: [
                E,
                {
                    key: "F",
                    children: [G]
                }
            ]
        },
        {
            key: "D",
            children: [G]
        }
    ]
} // 数据源

/** 遍历 */
function BFS(root: BFSProps) {
    const queue = new LinkedQueue<BFSProps>()
    queue.enQueue(root)
    let size = queue.size()
    const set = new Set()
    let step = 0;
    set.add(root)
    while (size > 0) {
        const item = queue.Front()
        if(item === -1 ){
           break
        }
        console.log(item.key)
        if (Array.isArray(item.children)) {
            item.children.forEach(i => {
                if( !set.has(i)){
                    queue.enQueue(i)
                    set.add(i)
                }
            })
        }
        queue.deQueue()
        size = queue.size()
        step ++ 
    }
    return step
}
BFS(root)