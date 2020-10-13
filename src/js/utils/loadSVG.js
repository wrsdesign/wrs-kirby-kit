import is from "./is";

var loadSVG = path => {
  if (is.und(path) || !is.str(path)) return;

  function insert(res) {
    var containerNode = document.createElement("div");
    containerNode.setAttribute("hidden", true);
    containerNode.innerHTML = res;

    document.body.insertBefore(containerNode, document.body.childNodes[0]);
  }

  (() => {
    var req = new window.XMLHttpRequest();

    req.open("GET", path, true);
    req.send();

    req.onload = e => {
      if (req.status >= 200 && req.status < 400) insert(req.responseText);
      req.onload = null;
    };
  })();
};

export default loadSVG;
