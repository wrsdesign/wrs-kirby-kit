var setFocus = (node) => {
  node.focus();

  if (node !== document.activeElement) {
    node.setAttribute("tabindex", "-1");
    node.focus();
  }
};

export default setFocus;
