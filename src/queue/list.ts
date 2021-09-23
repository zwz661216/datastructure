import {Queue,NodeProps} from './interface'
/**
 * 链表队列
 */
 export  default class LinkedSizeQueue<T> implements Queue<T> {
    #maxLen: number
    #head: NodeProps<T>
    #tail: NodeProps<T>
    #queue: Set<NodeProps<T>>
    #length: number
    constructor(k: number) {
        this.#maxLen = k
        this.#queue = new Set()
    
        this.#length = 0
    }
    public enQueue(element: T) {
        if (this.#length === this.#maxLen) {
            return false
        }
        const node: NodeProps<T> = {
            element,
        }
        node.next = node
        if (this.isEmpty()) {
            this.#head = node
            this.#tail = node
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
        this.#length --
        return true
    }

    public Front() {
        if (this.isEmpty()) {
            return -1
        }
        return this.#head.element
    }

    public Rear() {
        if (this.isEmpty()) {
            return -1
        }
        return this.#tail.element
    }

    public isEmpty() {
        return this.#length === 0
    }

    public isFull() {
        return this.#length === this.#maxLen
    }
    public size() {
        return this.#length
    }
    public clear() {
        this.#head = null
        this.#tail = null
        this.#length = 0
        this.#queue.clear();
    }
}

/**
 * 链表队列
 */
 export class LinkedQueue<T> implements Queue<T> {
    #head: NodeProps<T>
    #tail: NodeProps<T>
    #queue: Set<NodeProps<T>>
    #length: number
    constructor() {
        this.#queue = new Set()
        this.#length = 0
    }
    public enQueue(element: T) {
        const node: NodeProps<T> = {
            element,
        }
        node.next = node
        if (this.isEmpty()) {
            this.#head = node
            this.#tail = node
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
        this.#length --
        return true
    }

    public Front() {
        if (this.isEmpty()) {
            return -1
        }
        return this.#head.element
    }

    public Rear() {
        if (this.isEmpty()) {
            return -1
        }
        return this.#tail.element
    }

    public isEmpty() {
        return this.#length === 0
    }
 
    public size() {
        return this.#length
    }
    public clear() {
        this.#head = null
        this.#tail = null
        this.#length = 0
        this.#queue.clear();
    }
}
