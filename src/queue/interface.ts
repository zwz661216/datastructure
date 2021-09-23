
export abstract class Queue<T> {
    /** 获取队列中元素的个数 */
    abstract size(): number;
    /** 判断队列中的元素是否为空 */
    abstract isEmpty(): boolean;
    /**入队一个元素 */
    abstract enQueue(e: T): boolean;
    /** 出队一个元素 */
    abstract deQueue(): boolean;
    /** 获取当前队首的元素 */
    abstract Front(): -1 | T;
    abstract clear(): void
}
export interface NodeProps<T> {
    element: T
    next?: NodeProps<T>
}