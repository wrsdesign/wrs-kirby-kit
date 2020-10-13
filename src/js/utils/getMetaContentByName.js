/**
 * Get content attribute of any <meta> tag
 * @param {string} name Name of needed <meta>
 */

var getMetaContentByName = function(name) {
  document.querySelector(`meta[name='${name}']`).getAttribute("content");
};

export default getMetaContentByName;
