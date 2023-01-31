class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];

    while (arr.length) {
      const node = arr.unshift();

      arr.push(...node.children);
      fn(node);
    }
  }
}

export { Node, Tree };

/*
const letters = [];
const t = new Tree();
t.root = new Node(1);
t.root.add(2);
t.root.add(3);
t.root.children[0].add(4);
t.traverseBF((node) => {
  letters.push(node.data);
});
*/
