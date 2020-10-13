/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
var isInViewport = (e, { top: t, height: h } = e.getBoundingClientRect()) => {
  var vh = window.App.viewport.height || window.innerHeight;
  return t <= vh && t + h >= 0;
};

export default isInViewport;
