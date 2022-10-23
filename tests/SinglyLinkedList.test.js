import { describe, test, expect } from "@jest/globals";
import SinglyLinkedList from "../src/SinglyLinkedList";

describe("SinglyLinkedList", function () {
  test("should have these methods on class", function () {
    const linkedList = new SinglyLinkedList(100);

    expect(linkedList.push).toBeDefined();
    expect(linkedList.pop).toBeDefined();
    expect(linkedList.shift).toBeDefined();
    expect(linkedList.unshift).toBeDefined();
    expect(linkedList.get).toBeDefined();
    expect(linkedList.set).toBeDefined();
    expect(linkedList.insert).toBeDefined();
    expect(linkedList.remove).toBeDefined();
    expect(linkedList.reverse).toBeDefined();
    expect(linkedList.toArray).toBeDefined();
  });

  test("should push (add node to tail) to linked list", function () {
    const linkedList = new SinglyLinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.length).toBe(0);

    linkedList.push(1); // head
    linkedList.push(2); // head.next
    linkedList.push(3); // head.next.next
    linkedList.push(4); // tail

    expect(linkedList.head.val).toBe(1);
    expect(linkedList.head.next.val).toBe(2);
    expect(linkedList.head.next.next.val).toBe(3);
    expect(linkedList.tail.val).toBe(4);
    expect(linkedList.length).toBe(4);
    expect(linkedList.toString()).toBe("1,2,3,4");
  });

  test("should pop (remove node at tail) from linked list", function () {
    const linkedList = new SinglyLinkedList();

    linkedList.push(1); // head
    linkedList.push(2); // head.next
    linkedList.push(3); // head.next.next
    linkedList.pop(); // remove tail

    expect(linkedList.toString()).toBe("1,2");
    expect(linkedList.tail.val).toBe(2);
    expect(linkedList.length).toBe(2);

    linkedList.pop();
    linkedList.pop();

    expect(linkedList.toString()).toBe("");
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  test("should unshift (add node at head) from linked list", function () {
    const linkedList = new SinglyLinkedList();

    linkedList
        .push(1)
        .push(2)
        .push(3);

    expect(linkedList.length).toBe(3);

    linkedList.shift();

    expect(linkedList.length).toBe(2);
    expect(linkedList.toString()).toBe("2,3");

    linkedList.shift();
    linkedList.push(4);

    expect(linkedList.length).toBe(2);
    expect(linkedList.toString()).toBe("3,4");
  });

  test("should shift (remove node at head) from linked list", function () {
    const linkedList = new SinglyLinkedList();

    linkedList
        .push(1)
        .push(2);

    expect(linkedList.length).toBe(2);

    linkedList.unshift(-1);

    expect(linkedList.length).toBe(3);
    expect(linkedList.toString()).toBe("-1,1,2");

    linkedList.unshift(-2);

    expect(linkedList.length).toBe(4);
    expect(linkedList.toString()).toBe("-2,-1,1,2");
  });

  test("should get a node at specified index", function () {
    const linkedList = new SinglyLinkedList();

    linkedList.push("ten");
    linkedList.push("twenty");
    linkedList.push("thirty");

    expect(linkedList.length).toBe(3);

    const foundNode1 = linkedList.get(1);
    const nodeDoesNotExist = linkedList.get(-1);

    expect(foundNode1.val).toBe("twenty");
    expect(foundNode1.next.val).toBe("thirty");
    expect(nodeDoesNotExist).toBeNull();

    linkedList.unshift("zero");

    expect(linkedList.toString()).toBe("zero,ten,twenty,thirty");

    const foundNode2 = linkedList.get(0);

    expect(foundNode2.val).toBe("zero");
  });

  test("should set a node at specified index", function () {
    const linkedList = new SinglyLinkedList();

    linkedList.push("queue");
    linkedList.push("stack");
    linkedList.push("tree");

    expect(linkedList.length).toBe(3);
    expect(linkedList.tail.val).toBe("tree");
    expect(linkedList.toString()).toBe("queue,stack,tree");

    linkedList.set(2, "list");

    expect(linkedList.tail.val).toBe("list");
    expect(linkedList.toString()).toBe("queue,stack,list");
  });

  test("should insert a node at specified index", function () {
    const linkedList = new SinglyLinkedList();

    linkedList.insert(0, "one"); // uses push internally
    expect(linkedList.head.val).toBe("one");
    expect(linkedList.tail.val).toBe("one");

    linkedList.insert(-1, "minus"); // edge case

    expect(linkedList.head.val).toBe("one");
    expect(linkedList.tail.val).toBe("one");

    linkedList.insert(2, "plus"); // edge case

    expect(linkedList.head.val).toBe("one");
    expect(linkedList.tail.val).toBe("one");
    expect(linkedList.length).toBe(1);

    linkedList.push("two");
    linkedList.insert(2, "twenty");
    const nodeAtIndex3 = linkedList.get(2);

    expect(linkedList.tail.val).toBe("twenty");
    expect(nodeAtIndex3.val).toBe("twenty");
  });

  test("should remove a node at specified index", function () {
    const linkedList = new SinglyLinkedList();

    linkedList.insert(0, "one"); // uses push internally
    linkedList.push("two");
    linkedList.push("three");
    linkedList.unshift("four");
    linkedList.unshift("five");

    expect(linkedList.length).toBe(5);

    linkedList.remove(0);

    expect(linkedList.length).toBe(4);
    expect(linkedList.head.val).toBe("four");
    expect(linkedList.tail.val).toBe("three");

    linkedList.remove(-1);

    expect(linkedList.length).toBe(4);
    expect(linkedList.toString()).toBe("four,one,two,three");
  });

  test("should return linked list as an array", function () {
    const linkedList = new SinglyLinkedList();

    linkedList
        .push(1)
        .push(2)
        .push(3)
        .push(4)
        .push(5);

    expect(linkedList.toArray().join(",")).toBe("1,2,3,4,5"); // why?
  });
});
