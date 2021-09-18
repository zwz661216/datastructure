import {Queue} from './interface'
interface NodeProps<T>{
    element: T
    next?: NodeProps<T>
}
/**
 * 链表队列
 */
export default class LinkedQueue<T> implements Queue<T>{
    #head: NodeProps<T>
    #tail:  NodeProps<T>
    #queue: Set<NodeProps<T>>
    #length:number
    // #forEachIndex:NodeProps<T>
    constructor() {
        this.#queue = new Set()
        this.#length = 0
         
    }
    public enQueue(element: T) {
        const node:NodeProps<T> = {
            element,
        }
        node.next = node
        if (this.isEmpty()) {
            this.#head = node
            this.#tail = node
            // this.#forEachIndex  = node
        } else {
            this.#tail.next = node
            this.#tail = node
        }
        this.#length ++
        this.#queue.add(node)
        return true
    }
    public deQueue() {
        if (this.isEmpty()) {
            return false
        }
        const lastHead = this.#head
        this.#queue.delete(lastHead)
        this.#head = lastHead.next
        // this.#forEachIndex  = lastHead.next
        this.#length --
        return true
    }
    public size() {
        return this.#length
    }
    /** 队列是否为空 */
    public isEmpty() {
        return this.#length === 0
    }

    /** 取出首项 */
    public Front() {
        if (this.isEmpty()) {
            return null
        }
        return this.#head.element
    }

    public clear() {
        this.#head = null
        this.#tail = null
        this.#length = 0
        this.#queue.clear();
    }
}

