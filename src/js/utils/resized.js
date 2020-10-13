var resized = (obj = window) => {
  var setViewport = () => {
    obj.viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    var vh = document.documentElement.clientHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  window.addEventListener("resize", setViewport);
  setViewport();
};


export default resized;
