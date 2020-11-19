/*!
 * Run event after the DOM is ready
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn Callback function
 */
var ready = fn => {
  // Sanity check
  if (typeof fn !== "function") return;

  var h = () => {
    window.dispatchEvent(new CustomEvent('app:ready'))
    return fn()
  }

  // Otherwise, wait until document is loaded
  document.addEventListener("DOMContentLoaded", h, false);
};

export default ready;
