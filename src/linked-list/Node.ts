export default class Node<T> {

    private value: T;
    private next: Node<T> | null;

    constructor(value: T, next?: Node<T> | null) {
        this.value = value;
        this.next = next;
    }

}