const debug = () => {
  var style = document.createElement("style");
  var isActive = false;
  style.type = "text/css";

  document.addEventListener(
    "keydown",
    function(e) {
      if (
        (window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) &&
        e.keyCode == 83 &&
        e.shiftKey
      ) {
        e.preventDefault();

        style.textContent = !isActive
          ? "*, *:before, *:after { box-shadow: inset 0 0 0 1px #e64980 !important; }"
          : null;
        document
          .getElementsByTagName("head")[0]
          [!isActive ? "appendChild" : "removeChild"](style);

        isActive = !isActive;
      }
    },
    false
  );
};

export default debug;
