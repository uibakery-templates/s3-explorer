const result = [];

{{data}}.reduce(
  (rootNode, file) => {
    file.Key.split('/').reduce((node, subpath, depth, splittedPath) => {
      if (!node.children) {
        node.children = [];
      }

      let childNode = node.children.find((sameLevelNode) => sameLevelNode.name === subpath);

      if (!childNode) {
        childNode = {
          name: subpath,
          path: splittedPath.slice(0, depth + 1).join('/'),
          value: file.Size,
        };
        node.children.push(childNode);
      } else {
        childNode.value += file.Size;
      }

      return childNode;
    }, rootNode);

    return rootNode;
  },
  { children: result }
);

return result;