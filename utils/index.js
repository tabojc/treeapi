const mapTreeNodeToJson = (node) => {
  if (!node) return [];
  const children = node.children.map(x => mapTreeNodeToJson(x))
  return {
      'id': node.key,
      'label': node.value,
      'children': children,
  }
}

module.exports  = mapTreeNodeToJson;

