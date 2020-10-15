// getCurrentMediaQuery.js
//
// Get current media-query from body 'content' rule
// @return {string}

var getCurrentMediaQuery = () => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue("--breakpoint")
    .trim();
};

export default getCurrentMediaQuery;
