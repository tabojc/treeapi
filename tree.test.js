const { Tree }= require('./Tree');


const tree = new Tree(1, 'root');

tree.insert(1, 11, 'AC');
tree.insert(1, 12, 'BC');
tree.insert(12, 121, 'BG');
tree.insert(1, 13, 'BG');

console.dir([mapTreeNodeToJson(tree.root)])

//[...tree.preOrderTraversal()].map(x => console.dir(mapTreeNodeToJson(x)));
// ['AB', 'AC', 'BC', 'BG']

tree.root.value;              // 'AB'
tree.root.hasChildren;        // true

tree.find(12).isLeaf;         // false
tree.find(121).isLeaf;        // true
tree.find(121).parent.value;  // 'BC'

tree.remove(12);

[...tree.postOrderTraversal()].map(x => console.log(x.value));
// ['AC', 'AB']

function mapTreeNodeToJson(node) {
    if (!node) return [];
    const children = node.children.map(x => mapTreeNodeToJson(x))
    return {
        'id': node.key,
        'label': node.value,
        'children': children,
    }
}