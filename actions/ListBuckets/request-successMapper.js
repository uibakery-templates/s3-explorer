const parser = new DOMParser();
const doc = parser.parseFromString(atob({{data}}.base64), {{data}}.contentType);

const errorNode = doc.querySelector('parsererror');
if (errorNode) {
  throw new Error(errorNode.innerHTML);
}

const nodeToText = (node) => node.textContent;
const creationDates = [...doc.querySelectorAll('ListAllMyBucketsResult Buckets Bucket CreationDate')].map(nodeToText);
const names = [...doc.querySelectorAll('ListAllMyBucketsResult Buckets Bucket Name')].map(nodeToText);

return creationDates.map((creationDate, index) => ({
  creationDate,
  name: names[index],
}));