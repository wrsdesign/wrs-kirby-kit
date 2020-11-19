// getCurrentMediaQuery.js
//
// Get current media-query from html '--breakpoint' custom rule
// @return {string}

var getCurrentMediaQuery = () => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue('--breakpoint')
    .trim()
    .replace(/['"]+/g, '')
}

export default getCurrentMediaQuery
