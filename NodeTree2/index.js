class NodeTree {
  contructor(parent, value) {
    this.parent = parent;
    this.value = value;
    this.children = null;
  }

  searchChildren(node) {
    if (!this.children) return null;
    if (this.children) {
      Object.keys(this.children).filter(e => {
        e.value == node.value
      });
    }
  }

  appendChild(newNode) {
    return this.children.push(newNode);
  }
}

module.exports = NodeTree;
