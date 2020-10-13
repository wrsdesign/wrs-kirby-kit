/**
 * Convert a template string into HTML DOM nodes
 * @param  {String} str The template string
 * @return {Node}       The template HTML
 */
var support = (function() {
  if (!window.DOMParser) return false;
  var parser = new DOMParser();
  try {
    parser.parseFromString("x", "text/html");
  } catch (err) {
    return false;
  }
  return true;
})();

var stringToHTML = (str) => {
  // If DOMParser is supported, use it
  if (support) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    return doc.body.children[0];
  }

  // Otherwise, fallback to old-school method
  var dom = document.createElement("div");
  dom.innerHTML = str;
  return dom.children[0];
};

export default stringToHTML;
