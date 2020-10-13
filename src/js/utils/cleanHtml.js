const cleanHtml = node => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

export default cleanHtml;
