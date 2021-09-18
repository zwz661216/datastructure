

import {Queue} from './interface'

/**
 * 数组队列
 */
export default class ArrayQueue<T> implements Queue<T>{
    #queue: T[]
    constructor() {
        this.#queue = []
    }
    /**入队 */
    public enQueue(element: T) {
        this.#queue.push(element)
        return true
    }
    /**出队 */
    public deQueue() {
        if (this.isEmpty()) {
            return false
        }
        this.#queue.shift()
        return true
    }
    /** 队列长度 */
    public size() {
        return this.#queue.length
    }
    /** 队列是否为空 */
    public isEmpty() {
        return this.#queue.length === 0
    }
    /** 取出首项 */
    public Front() {
        return this.#queue[0]
    }
    public clear() {
        this.#queue = []
    }
}