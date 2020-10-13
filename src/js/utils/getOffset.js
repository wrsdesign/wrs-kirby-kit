var getOffset = function(node) {
  if (node) {
    var rect = node.getBoundingClientRect();
    var docElem = document.documentElement;

    return {
      top: rect.top + docElem.scrollTop,
      left: rect.left + docElem.scrollLeft,
      bottom: rect.bottom + docElem.scrollTop,
      right: rect.right + docElem.scrollLeft,
      width: rect.width,
      height: rect.height,
    };
  } else {
    return null;
  }
};

export default getOffset;
