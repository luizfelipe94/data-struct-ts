import LinkedList from "../linked-list/LinkedList";
import Node from "../linked-list/Node";

test("Linked list", () => {
    const linkedList = new LinkedList(new Node(4, null));
    console.log(linkedList);
});