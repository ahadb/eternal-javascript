import { describe, test, expect } from "@jest/globals";
import LinkedListNode from "../src/LinkedListNode";

describe("LinkedListNode", function () {
  test("should create a list node with value", function () {
    const node = new LinkedListNode(10);

    expect(node.val).toEqual(10);
    expect(node.next).toBeNull();
  });

  test("should create a list node with map as value", function () {
    const myMapNode = new Map();
    myMapNode.set(1, "one");
    const node = new LinkedListNode(myMapNode);

    expect(node.val.get(1)).toEqual("one");
    expect(node.next).toBeNull();
  });
});
