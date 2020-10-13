var nextTick = fn => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fn();
    });
  });
};

export default nextTick;
