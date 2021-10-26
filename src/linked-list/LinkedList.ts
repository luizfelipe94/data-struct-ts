import Node from "./Node";

export default class LinkedList<T> {

    private head: Node<T>;
    private tail: Node<T>;
    private length: number;

    constructor(value: T) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

}