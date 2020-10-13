/**
 * Alternative for setTimeout()
 * @param  {number} delay Timeout in ms
 * @return {object}
 */

var wait = function(fn, delay = 0) {
  var id = null;

  requestAnimationFrame(() => {
    if (delay === 0) {
      fn.call();
      return;
    }

    var start = performance.now();
    var loop = function() {
      var current = performance.now();
      var delta = current - start;

      delta >= delay ? fn.call() : (id = requestAnimationFrame(loop));
    };

    id = requestAnimationFrame(loop);
    return id;
  });

  return {
    clear: () => {
      window.cancelAnimationFrame(id);
      id = null;
    },
  };
};

export default wait;
