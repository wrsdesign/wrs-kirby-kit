// getCurrentMediaQuery.js
//
// Get current media-query from body 'content' rule
// @return {string}
//
// Example of use css
// ----------------------------------------------------------------------------
// body::after {
//   font: 0/0 a;
//   color: transparent;
//   text-shadow: none;
//   width: 1px;
//   height: 1px;
//   margin: -1px 0 0 -1px;
//   position: absolute;
//   left: -1px;
//   top: -1px;
//   content: 'sm';
// }
//
// @media (min-width: 768px) { body::after { content: 'md' } }

var getCurrentMediaQuery = () => {
  function parse(str) {
    return str.replace(/'/gi, "").replace(/"/gi, "");
  }

  return window.getComputedStyle
    ? parse(
        window
          .getComputedStyle(document.body, "::after")
          .getPropertyValue("content")
      ) || "unset"
    : null;
};

export default getCurrentMediaQuery;
