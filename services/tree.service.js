const { Tree } = require('./tree');
//const NodeTree = require('./NodeTree');
//const Tree = require('Tree');

const mapTreeNodeToJson = require('./utils');

class TreesService {

  constructor() {
    this.trees = [
      {
        id: 1,
        parentId: 0,
        label: 'root'
      },
      {
        id: 3,
        parentId: 1,
        label: 'frog'
      },
      {
        id: 5,
        parentId: 3,
        label: 'ant'
      },
      {
        id: 7,
        parentId: 2,
        label: 'lion'
      },
    ];
    this.tree = new Tree(1, 'root');
  }

  generateId()
  {
    const result = this.trees.reduce((a, b) => {
      return a.id >= b.id ? a: b;
    }, { id: -Infinity });

    return result.id + 1;
  }

  printNode({ id, label, parentId })
  {
    return ({
      [id]: {
        label: label,
        parentId: parentId,
        children: []
      }
    });
  }

/*
  insertNode(parentId, label) {
    const parentNode = this.root.searchChildren(parentId);
    const newNode = new NodeTree(parentId, label);
    const res = parentNode.appendChild(newNode);
    return res && false;
  }
*/

  sortByParent() {
    return this.trees
      .sort((current, next) => (current.parentId - next.parentId+(current.id - next.id)));
  }

  create(parentId, label)
  {
    //this.insertNode(parentId, label);
    /*
    const parentNode = this.trees.filter((node) => {
      return node.parentId === parentId
    });
    */
/*
    if (parentNode) {
      */

      const id = this.generateId();

      const row = {
        id: id,
        parentId: parentId,
        label: label
      };

      this.tree.insert(parentId, id, label);

      this.trees.push(row);

      return [ mapTreeNodeToJson(this.tree.root) ];
/*
      const treeNode = {
        [id]: {
          label: label,
          parentId: parentId,
          children: []
        }
      }
*/
      //return this.printNode(row);
      /*
    }
    return {};
    */
  }
/*
  mapRowsToTree(rows) {

    return rows.map(row => {
      return {
        [row.id]: {
          label: row.label,
          parentId: row.parentId,
          children: []
        }
      }
    });

  }
*/
/*
  reduceTreeToNode(trees) {
    return trees.reduce((a, b) => {
      //let result = [];
      //const { parentId } = b;
      //const { length } = a;
      let index = 0;
      for (const row of a) {
        //console.log({'index': index });
        const id = Object.keys(row)[0];
        //console.log({ 'key': key });
        if (index in a) {
          if (id in a[index]) {
            //const e = a[index][id];
            //console.log({'a': {'id': id, 'parentId': e.parentId}});
            //console.log({'b': b});
            //console.log('\n');

            const currentId = Object.keys(b)[0];
            if (b[currentId].parentId == a[index][id].parentId) {
              //console.log({'b[currentId]': b[currentId]});
              a[index][id].children.push(b);
              return a;
            }
          }
        }
        index++;
      }

      //console.log(b);
      a.push(b);
      return a;
    }, []);
  }
*/
/*
displayTree() {

    let tree = [];
    let parentId = null;
    let treeNode = {};

    for (const row of records) {
      tree.push(
        this.printNode({
          id:row.id,
          label: row.label,
          parentId: row.parentId
        })
      );

      treeNode = {
        [row.id]: {
          label: row.label,
          parentId: row.parentId,
          children: []
        }
      }
*/
      //console.dir({id: row.id, parentId});
      //console.dir(treeNode);
      /*if (row.parentId !== parentId) {
      }*/ /*else {
        const index = tree.length - 1;
        if (parentId in tree[index]) {
            //console.dir({'last': tree[index]});
            const ids = Object.keys(tree[index]);
            const idx = ids.length - 1;
            const field = ids[idx];
            tree[index][field].children.push(
              this.printNode({
                id:row.id,
                label: row.label,
                parentId: row.parentId
              })
            );
            //console.dir({'children': tree[index][field].children});
        }
      }*/
      //parentId = row.parentId;
      /*
    }

    return tree;

  }
    */
  find() {
    /*
    const rows = this.trees
      .sort((current, next) => (current.parentId - next.parentId+(current.id - next.id)));

    console.log({rows});

    return  this.mapRowsToTree(rows);
    */

    //const rows = this.sortByParent();

    /*
    const res = rows.map((e, i) => {
      const index = i < e.parentId ? i: e.parentId
      console.dir({i});
      console.dir({'parent': e.parentId});
      console.dir({'index': index});
      if (index in this.root) {
        console.dir(this.root);
        this.root[index].push(e);
      } else {
        console.dir('2');
        console.dir(this.root);
        this.root[index] = [];
        this.root[index].push(e);
      }
      console.log('i:', i);
    });

    return res;
*/
  }

  findOne() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = TreesService;

