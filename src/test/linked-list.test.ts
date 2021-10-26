import LinkedList from "../linked-list/LinkedList";
import Node from "../linked-list/Node";

test("Linked list", () => {
    const linkedList = new LinkedList(4);
    linkedList
    .push(20)
    .push(21)
    .push(40);
    expect(linkedList.length).toBe(4);
});

test("Linked list", () => {
    const linkedList = new LinkedList(4);
    linkedList.push(20);
    linkedList.pop();
    expect(linkedList.length).toBe(1);
});