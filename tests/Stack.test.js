import { describe, test, expect } from "@jest/globals";
import Stack from "../src/Stack.js";

describe("Stack", function () {
  test("should have these methods on class", function () {
    const deck = new Stack();

    expect(deck.push).toBeDefined();
    expect(deck.pop).toBeDefined();
    expect(deck.peek).toBeDefined();
    expect(deck.isEmpty).toBeDefined();
  });

  test("should create an empty stack", function () {
    const deck = new Stack(10);

    expect(deck).toBeDefined();
    expect(deck.linkedList).toBeDefined();
  });

  test("should stack data", function () {
    const deck = new Stack();

    deck.push(1);
    deck.push(2);

    expect(deck.linkedList.head.val).toBe(2);
    expect(deck.linkedList.head.next.val).toBe(1);
  });

  test("should check if stack is empty", function () {
    const deck = new Stack();

    expect(deck.isEmpty()).toBe(true);
  });

  test("should peek data from a stack", function () {
    const deck = new Stack();
    deck.push(1);
    deck.push(2);
    deck.push(3);

    expect(deck.peek()).toBe(3);
  });

  test("should pop data from a stack", function () {
    const deck = new Stack();
    deck.push(1);
    deck.push(2);
    deck.push(3);

    expect(deck.pop()).toBe(3);
    expect(deck.pop()).toBe(2);
    expect(deck.pop()).toBe(1);
    //expect(deck.pop()).toBe(0);
  });
});
