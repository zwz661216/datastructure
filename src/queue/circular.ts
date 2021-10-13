import { Queue } from './interface'



/**
 * 数组队列-循环队列
 */
export default class CircularQueue<T> implements Queue<T> {
    #queue: T[]
    #head: number
    #tail: number
    #size: number
    constructor(k: number) {
        this.#queue = new Array(k)
        this.#head = 0
        this.#tail = -1
        this.#size = 0
    }
    /**入队 */
    public enQueue(element: T) {
        if (this.isFull()) {
            return false
        }
        this.#size ++
        this.#tail = (this.#tail + 1) % this.#queue.length;
        this.#queue[this.#tail] = element
        return true
    }
    /**出队 */
    public deQueue() {
        if (this.isEmpty()) {
            return false
        }
        if (this.#size === 0) {
            this.#head = 0;
            this.#tail = -1;
            return true;
        }
        this.#size --
        this.#head = (this.#head + 1) % this.#queue.length;
        return true
    }
    /** 队列长度 */
    public size() {
        return this.#queue.length
    }
    /** 队列是否为空 */
    public isEmpty() {
        return this.#size === 0
    }
    public isFull() {
        return this.#size === this.#queue.length
    }
    /** 取出首项 */
    public Front() {
        if (this.isEmpty()) {
            return -1
        }
        return this.#queue[this.#head]
    }
    /** 取出尾项 */
    public Rear() {
        if (this.isEmpty()) {
            return -1
        }
        return this.#queue[this.#tail]
    }
    public clear() {
        this.#queue = []
        this.#size = 0
        this.#head = 0;
        this.#tail = -1;
    }
}

