var scrolled = (obj = window) => {
  var setOffset = () => {
    obj.scrollOffset = window.pageYOffset
  };

  window.addEventListener("scroll", setOffset);
  setOffset();
};

export default scrolled;
