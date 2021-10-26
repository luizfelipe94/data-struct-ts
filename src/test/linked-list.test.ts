import LinkedList from "../linked-list/LinkedList";
import Node from "../linked-list/Node";

test("Linked list", () => {
    const linkedList = new LinkedList(4);
    linkedList
    .push(20)
    .push(21)
    .push(40);
    console.log(JSON.stringify(linkedList, null, 2));
    expect(linkedList.length).toBe(4);
});